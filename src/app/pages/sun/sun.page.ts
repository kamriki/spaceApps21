/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Copyright } from 'src/app/common/types';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.page.html',
  styleUrls: ['./sun.page.scss'],
})
export class SunPage implements OnInit {
  public copyright: Copyright = {
    name: 'NASA', url: 'https://solarsystem.nasa.gov/solar-system/sun/overview/'
  };

  constructor() { }

  ngOnInit() {
  }

  openWebpage(page: string) {
    let url = '';
    switch(page) {
      case 'black-spots': url = 'https://solarsystem.nasa.gov/solar-system/sun/overview/'; break;
      case 'parker': url = 'https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter/Teamwork_with_Parker_Solar_Probe'; break;
      case 'solar-winds': url = 'https://www.jpl.nasa.gov/nmp/st5/SCIENCE/solarwind.html'; break;
      case 'solar-orbiter': url = 'https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter'; break;
      case 'sun': url = 'https://solarsystem.nasa.gov/solar-system/sun/overview/'; break;
    }
    window.open(url, '_system', 'location=yes');
  }

}
