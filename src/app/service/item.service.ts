import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsUrl = 'assets/items.json';

  constructor(private http: HttpClient) {}

  //responsible for fetching a list of items from the specified URL
  getItems(): Observable<Item[]> { 
    return this.http.get<Item[]>(this.itemsUrl);
  }
}
export { Item };

