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
      { title: 'The Sun', url: '/sun' },
      { title: 'Sun-Exploring Vehicle', url: '/vehicle' },
      { title: 'HELIOPHYSICS', url: '/heliophysics' },
      // { title: 'Next Solar Cycle', url: '#' },
      { title: 'Future missions', url: '/missions' }
    ];
  }

}
