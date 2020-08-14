import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  scoped: true
})
export class AppHome {
  @Prop() createPeerCallback: (peerId: string) => void;
  @Prop() connectToPeerCallback: (peerId: string) => void;

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>My Game Room</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-button onClick={() => this.createPeerCallback(prompt('Enter the room name'))}>Create A Room</ion-button>
          <ion-button onClick={() => this.connectToPeerCallback(prompt('Enter the room name'))}>Join A Room</ion-button>
        </ion-content>
      </Host>
    );
  }
}
