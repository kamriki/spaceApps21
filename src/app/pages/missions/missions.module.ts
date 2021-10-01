import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MissionsPageRoutingModule } from './missions-routing.module';
import { MissionsPage } from './missions.page';
import { SharedModule } from 'src/app/common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionsPageRoutingModule, SharedModule
  ],
  declarations: [MissionsPage]
})
export class MissionsPageModule {}
