import { Component, h, Host, Prop } from '@stencil/core';
import { Message } from '../../utils/message';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  scoped: true
})
export class AppHome {
  @Prop() peerId: string;
  @Prop() hostId: string;
  @Prop() currentGame: string;
  @Prop() gameUpdate: { type: 'move' | 'update', update: any };
  @Prop() createPeerCallback: (peerId: string) => void;
  @Prop() connectToPeerCallback: (peerId: string) => void;
  @Prop() updateCurrentGame: (game: string) => void;
  @Prop() sendMessageCallback: (message: Message) => void;

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>{this.currentGame || 'My Game Room'}</ion-title>
          </ion-toolbar>
        </ion-header>

        {
          !this.peerId &&
          <ion-content class="ion-padding">
            <ion-button onClick={() => this.createPeerCallback(prompt('Enter the room name'))}>Create A Room</ion-button>
            <ion-button onClick={() => this.connectToPeerCallback(prompt('Enter the room name'))}>Join A Room</ion-button>
          </ion-content>
        }
        {
          this.peerId && !this.currentGame &&
          (
            this.peerId === this.hostId ?
              <ion-content class="ion-padding">
                <ion-list>
                  <ion-item button onClick={() => this.updateCurrentGame('tic-tac-toe')}>Tic Tac Toe</ion-item>
                </ion-list>
              </ion-content> :
              <ion-content class="ion-padding">
                <ion-text>Waiting for host to start a game...</ion-text>
              </ion-content>
          )

        }
        {
          this.peerId && this.currentGame === 'tic-tac-toe' &&
          <ion-content class="ion-padding">
            <app-game-tic-tac-toe
              isHost={this.peerId === this.hostId}
              gameUpdate={this.gameUpdate}
              notifyMoveCallback={this.notifyMove}
              broadcastGameUpdateCallback={this.broadcastGameUpdate}
            ></app-game-tic-tac-toe>
          </ion-content>
        }
      </Host>
    );
  }

  notifyMove = (move: any) => {
    this.sendMessageCallback({
      type: 'game-move',
      player: this.peerId,
      content: JSON.stringify(move)
    });
  }

  broadcastGameUpdate = (gameUpdate: any) => {
    this.sendMessageCallback({
      type: 'game-update',
      player: this.peerId,
      content: JSON.stringify(gameUpdate)
    });
  }
}
