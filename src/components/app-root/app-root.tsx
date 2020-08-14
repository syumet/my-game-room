import { Component, h } from '@stencil/core';
import Peer from 'peerjs';
import { Message } from '../../utils/message';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  peer: Peer;

  peerId: string;
  hostId: string;
  connections: Peer.DataConnection[] = [];

  render() {
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route
            url="/"
            component="app-home"
            componentProps={{
              createPeerCallback: this.createPeer,
              connectToPeerCallback: this.connectToPeer
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
            switch (message.type) {
              case 'greeting':
                const messageOut: Message = {
                  type: "chat",
                  player: this.peer.id,
                  content: 'hi!'
                };
                console.log(messageOut.player + ': ' + message.content);
                for (const connection of this.connections) {
                  if (connection.open) {
                    connection.send(JSON.stringify(messageOut));
                  } else {
                    connection.on('open', () => connection.send(JSON.stringify(messageOut)));
                  }
                }
                break;
              case 'chat':
                console.log(message.player + ': ' + message.content);
                break;
            }
          }
        );
      }
    )
  }

  connectToPeer = (peerId: string) => {
    this.hostId = peerId;
    if (!this.peer) {
      this.createPeer();
      this.peer.on('open', () => {
        const connection = this.peer.connect(peerId);
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
}
