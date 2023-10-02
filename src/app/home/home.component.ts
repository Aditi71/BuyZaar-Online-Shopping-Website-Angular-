import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { ClothesService } from '../service/clothes.service';
import { Router } from '@angular/router';
import { Item } from '../Model/item.model';
import { Clothes } from '../Model/cloth.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  clothing: Clothes[] = [];

  constructor(
    private itemService: ItemService,
    private router: Router,
    private clothesService: ClothesService 
  ) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });

    // Initialize the clothing data 
    this.clothesService.getClothes().subscribe((data: Clothes[]) => {
      this.clothing = data;
    });
  }

  viewDetails(itemId: number) {
    this.router.navigate(['/item-detail', itemId]);
  }

  viewDetailCloth(clothId: number) {
    this.router.navigate(['/clothes-detail', clothId]);
  }

  navToMenu(){
    this.router.navigate(['/menu-ha']);
  }

  navToMenuClothing(){
    this.router.navigate(['/menu-cloth']);
  }
}
