import { Component, OnInit } from '@angular/core';
import { Copyright } from 'src/app/common/types';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {
  public copyright: Copyright = {
    name: 'esa', url: 'https://www.esa.int/ESA_Multimedia/Images/2020/01/Missions_studying_the_Sun'
  };

  constructor() { }

  ngOnInit() {
  }

}
