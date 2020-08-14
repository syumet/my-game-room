import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  scoped: true
})
export class AppHome {
  @Prop() peerId: string;
  @Prop() hostId: string;
  @Prop() currentGame: string;
  @Prop() createPeerCallback: (peerId: string) => void;
  @Prop() connectToPeerCallback: (peerId: string) => void;
  @Prop() updateCurrentGame: (game: string) => void;

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
          this.peerId && this.peerId === this.hostId && !this.currentGame &&
          <ion-content class="ion-padding">
            <ion-list>
              <ion-item button onClick={() => this.updateCurrentGame('tic-tac-toe')}>Tic Tac Toe</ion-item>
            </ion-list>
          </ion-content>
        }
        {
          this.peerId && this.currentGame &&
          <ion-content class="ion-padding">
            <ion-text>{this.currentGame}</ion-text>
          </ion-content>
        }
      </Host>
    );
  }
}
