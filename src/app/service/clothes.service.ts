import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clothes } from '../Model/cloth.model';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  private clothesUrl = '../assets/clothing.json';
  constructor(private http: HttpClient) {}

  //responsible for fetching a list of items from the specified URL
  getClothes(): Observable<Clothes[]> { 
    return this.http.get<Clothes[]>(this.clothesUrl);
  }
}
export { Clothes };
