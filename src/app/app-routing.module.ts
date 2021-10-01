import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'sun', loadChildren: () => import('./pages/sun/sun.module').then( m => m.SunPageModule) },
  { path: 'vehicle', loadChildren: () => import('./pages/vehicle/vehicle.module').then( m => m.VehiclePageModule) },
  { path: 'heliophysics', loadChildren: () => import('./pages/heliophysics/heliophysics.module').then( m => m.HeliophysicsPageModule) },
  { path: 'missions', loadChildren: () => import('./pages/missions/missions.module').then( m => m.MissionsPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
