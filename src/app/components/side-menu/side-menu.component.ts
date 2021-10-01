/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public navigate: any;

  constructor() {
    this.sideMenu();
  }

  ngOnInit() {}

  sideMenu()
  {
    this.navigate =
    [
      { title: '', url: '' },
      { title: 'The Sun', url: '/sun' },
      { title: 'HelioPhysics', url: '/heliophysics' },
      { title: 'Next Solar Cycle', url: '/cycle' },
      { title: 'Future Missions', url: '/missions' }
    ];
  }

}
