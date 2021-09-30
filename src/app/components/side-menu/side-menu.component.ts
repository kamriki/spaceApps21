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
      { title: 'Home', url: '/home', icon: 'home' },
      { title: 'Trainings', url: '/trainings', icon: 'library'}
      // { title: "New Order", url: "/new-request", icon: "duplicate" },
      // { title: "Shoppers", url: "/shoppers", icon: "people-sharp" },
      // { title: "Profile", url: "/profile", icon: "person-circle" },
    ];
  }

}
