import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../service/clothes.service';
import { Router } from '@angular/router';
import { Clothes } from '../Model/cloth.model';

@Component({
  selector: 'app-menu-clothing',
  templateUrl: './menu-clothing.component.html',
  styleUrls: ['./menu-clothing.component.css']
})
export class MenuClothingComponent {
  clothing: Clothes[] = [];

  constructor(private clothesService: ClothesService, private router: Router) {}

  ngOnInit(): void {
    this.clothesService.getClothes().subscribe((data: Clothes[]) => {
      this.clothing = data;
    });
  }

  viewDetails(clothId: number) {
    this.router.navigate(['/clothes-detail', clothId]);
  }

  goBack(){
    this.router.navigate(['/home']);
  }

}
