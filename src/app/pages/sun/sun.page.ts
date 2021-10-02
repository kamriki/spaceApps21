import { Component, OnInit } from '@angular/core';
import { Copyright } from 'src/app/common/types';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.page.html',
  styleUrls: ['./sun.page.scss'],
})
export class SunPage implements OnInit {
  public copyright: Copyright = {
    name: 'esa', url: 'https://www.esa.int/ESA_Multimedia/Images/2020/01/Missions_studying_the_Sun'
  };

  constructor() { }

  ngOnInit() {
  }

}
