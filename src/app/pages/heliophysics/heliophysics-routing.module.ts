import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeliophysicsPage } from './heliophysics.page';

const routes: Routes = [
  {
    path: '',
    component: HeliophysicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeliophysicsPageRoutingModule {}
