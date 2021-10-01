import { Component, Input, OnInit } from '@angular/core';
import { Copyright } from 'src/app/common/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() copyright?: Copyright;

  constructor() { }

  ngOnInit() {}

  openWebpage(url: string) {
    window.open(url, '_system', 'location=yes');
  }

}
