import { Component, h, State } from '@stencil/core';
import Peer from 'peerjs';
import { Message } from '../../utils/message';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  peer: Peer;
  connections: Peer.DataConnection[] = [];

  @State() peerId: string;
  @State() hostId: string;
  @State() currentGame: string;
  @State() gameUpdate: { type: 'move' | 'update', update: any };

  render() {
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route
            url="/"
            component="app-home"
            componentProps={{
              peerId: this.peerId,
              hostId: this.hostId,
              currentGame: this.currentGame,
              gameUpdate: this.gameUpdate,
              createPeerCallback: this.createPeer,
              connectToPeerCallback: this.connectToPeer,
              updateCurrentGame: this.updateCurrentGame,
              sendMessageCallback: this.sendMessage
            }}
          />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }

  createPeer = (peerId?: string) => {
    this.peer = new Peer(
      peerId,
      {
        host: 'peer-signaling-server.herokuapp.com',
        secure: true,
        key: 'peerjs',
        path: '/'
      }
    );
    this.peer.on(
      'open',
      id => {
        this.peerId = id;
        if (peerId) {
          this.hostId = id;
        }
      }
    );
    this.peer.on(
      'error',
      error => {
        if (error.type === 'unavailable-id') {
          alert('The id has been taken.');
        }
      }
    );
    this.peer.on(
      'connection',
      connection => {
        if (connection.peer !== this.hostId) {
          const connectionBack = this.peer.connect(connection.peer);
          this.connections.push(connectionBack);
        }
        connection.on(
          'data',
          data => {
            const message = JSON.parse(data) as Message;
            this.handleMessage(message, connection);
          }
        );
      }
    )
  }

  connectToPeer = (peerId: string) => {
    this.hostId = peerId;
    if (!this.peer) {
      this.createPeer();
      this.peer.on('open', id => {
        const connection = this.peer.connect(peerId);
        this.connections.push(connection);
        this.peerId = id;
        connection.on(
          'open',
          () => {
            const message: Message = {
              type: "greeting",
              player: this.peer.id,
              content: 'hi!'
            };
            connection.send(JSON.stringify(message));
          }
        )
      })
    }
  }

  updateCurrentGame = (game: string) => {
    this.currentGame = game;

    const setGameMessage: Message = {
      type: 'set-game',
      content: this.currentGame
    };
    for (const connection of this.connections) {
      if (connection.open) {
        connection.send(JSON.stringify(setGameMessage));
      } else {
        connection.on('open', () => connection.send(JSON.stringify(setGameMessage)));
      }
    }
  }

  sendMessage = (message: Message) => {
    for (const connection of this.connections) {
      connection.send(JSON.stringify(message));
    }
  }

  handleMessage(message: Message, connection: Peer.DataConnection) {
    switch (message.type) {
      case 'greeting':
        const messageOut: Message = {
          type: "chat",
          player: connection.peer,
          content: 'hi!'
        };
        console.log(messageOut.player + ': ' + message.content);
        for (const connection of this.connections) {
          if (connection.open) {
            connection.send(JSON.stringify(messageOut));
            if (this.currentGame && connection.peer === messageOut.player) {
              const setGameMessage: Message = {
                type: 'set-game',
                content: this.currentGame
              };
              connection.send(JSON.stringify(setGameMessage));
            }
          } else {
            connection.on(
              'open',
              () => {
                connection.send(JSON.stringify(messageOut));
                if (this.currentGame && connection.peer === messageOut.player) {
                  const setGameMessage: Message = {
                    type: 'set-game',
                    content: this.currentGame
                  };
                  connection.send(JSON.stringify(setGameMessage));
                }
              }
            );
          }
        }
        break;
      case 'chat':
        console.log(message.player + ': ' + message.content);
        break;
      case 'set-game':
        this.currentGame = message.content;
        console.log('Game set as ' + message.content);
        break;
      case 'game-move':
        console.log(JSON.stringify(message))
        this.gameUpdate = {
          type: 'move',
          update: JSON.parse(message.content)
        };
        break;
      case 'game-update':
        console.log(JSON.stringify(message))
        this.gameUpdate = {
          type: 'update',
          update: JSON.parse(message.content)
        };
        break;
    }
  }
}
