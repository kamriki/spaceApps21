import { SunService } from './../../services/sun.service';
import { Component, OnInit } from '@angular/core';
import { RowImages } from 'src/app/common/types';

@Component({
  selector: 'app-heliophysics',
  templateUrl: './heliophysics.page.html',
  styleUrls: ['./heliophysics.page.scss'],
})
export class HeliophysicsPage implements OnInit {
  public isLoading = true;
  public rowImages: any[] = []; // RowImages['items'][] = [];
  public hasMore = false;
  private page = 0;
  private totalPages = 0;

  /**
   * load images for page 1
   * update trackImages
   * push images to array & loadMore button - ToDo
   */
  constructor(
    private sunSrvc: SunService
  ) {
    this.loadMore();
  }

  ngOnInit() {}

  /**
   * stop loading spinner
   * ensure loaded images not exceeding total
   */
  loadMore() {
    if (this.page === 0 || this.page * 50 < this.totalPages) {
      this.page = this.page + 1;
      this.sunSrvc.getRowImages(this.page).subscribe(data => {
        if(data) {
          this.isLoading = false;
          this.totalPages = data.total;
          this.hasMore = data.more;
          // this.rowImages.push(data.items);
          this.rowImages = data.items;
          console.log('got images', data);
          //console.log(this.rowImages);
        }
      });
    }
  }

}
