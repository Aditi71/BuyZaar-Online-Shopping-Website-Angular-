import { Component } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Router } from '@angular/router';
import { Item } from '../Model/item.model';

@Component({
  selector: 'app-menu-ha',
  templateUrl: './menu-ha.component.html',
  styleUrls: ['./menu-ha.component.css']
})
export class MenuHAComponent {
  items: Item[] = []; 

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  viewDetails(itemId: number) {
    this.router.navigate(['/item-detail', itemId]);
  }

  goBack(){
    this.router.navigate(['/home']);
  }
}
