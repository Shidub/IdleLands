import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SocketClusterService } from '../socket-cluster.service';
import { GameService } from '../game.service';
import { ServerEventName } from '../../../shared/interfaces';

@Component({
  template: `
    <ion-list>
      <ion-list-header>Actions</ion-list-header>

      <ion-item (click)="rerollName()" button [disabled]="gameService.playerRef.gold < 50000">
        <ion-icon slot="start" name="refresh"></ion-icon> Reroll Name (50k)
      </ion-item>

      <ion-item (click)="rerollGender()" button [disabled]="gameService.playerRef.gold < 10000">
        <ion-icon slot="start" name="refresh"></ion-icon> Reroll Gender (10k)
      </ion-item>

      <ion-item (click)="rerollAffinity()" button [disabled]="gameService.playerRef.gold < 100000">
        <ion-icon slot="start" name="refresh"></ion-icon> Reroll Affinity (100k)
      </ion-item>

      <ion-item (click)="rerollAttribute()" button [disabled]="gameService.playerRef.gold < 75000">
        <ion-icon slot="start" name="refresh"></ion-icon> Reroll Attribute (75k)
      </ion-item>
    </ion-list>
  `,
  styles: [`

  `],
})
export class RerollPopover {

  constructor(
    private popoverCtrl: PopoverController,
    public gameService: GameService,
    private socketService: SocketClusterService
  ) { }

  rerollName() {
    this.socketService.emit(ServerEventName.PetRerollName);
  }

  rerollAttribute() {
    this.socketService.emit(ServerEventName.PetRerollAttribute);
  }

  rerollAffinity() {
    this.socketService.emit(ServerEventName.PetRerollAffinity);
  }

  rerollGender() {
    this.socketService.emit(ServerEventName.PetRerollGender);
  }

  dismiss() {
    this.popoverCtrl.dismiss();
  }
}
