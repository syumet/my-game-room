import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  scoped: true
})
export class AppHome {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>My Game Room</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-button>Create A Room</ion-button>
          <ion-button>Join A Room</ion-button>
        </ion-content>
      </Host>
    );
  }
}
