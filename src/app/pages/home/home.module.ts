import { SharedModule } from '../../common/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule, IonicModule, HomePageRoutingModule, SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
