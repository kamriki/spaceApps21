import { SunService } from './../../services/sun.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heliophysics',
  templateUrl: './heliophysics.page.html',
  styleUrls: ['./heliophysics.page.scss'],
})
export class HeliophysicsPage implements OnInit {

  constructor(
    private sunSrvc: SunService
  ) { }

  ngOnInit() {
    this.sunSrvc.getRowImages(1).subscribe(console.log);
  }

}
