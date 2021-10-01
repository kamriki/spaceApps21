import { SharedModule } from './../../common/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeliophysicsPageRoutingModule } from './heliophysics-routing.module';

import { HeliophysicsPage } from './heliophysics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeliophysicsPageRoutingModule, SharedModule
  ],
  declarations: [HeliophysicsPage]
})
export class HeliophysicsPageModule {}
