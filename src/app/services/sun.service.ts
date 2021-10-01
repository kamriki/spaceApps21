import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RowImages } from '../common/types';

@Injectable({
  providedIn: 'root'
})
export class SunService {

  constructor(
    private http: HttpClient
  ) { }

  getRowImages(page: number): Observable<RowImages> {
    return this.http.get<RowImages>(
      `https://solarsystem.nasa.gov/api/v1/raw_image_cassini_items?order=earth_date+desc&per_page=50&page=${page}&search=(SUN)%3Atarget`);
  }
}
