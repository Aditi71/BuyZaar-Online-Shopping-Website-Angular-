// item-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  selectedItem: any = {};

  constructor(private route: ActivatedRoute, private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
  
    if (itemId !== null) {
      // Convert itemId to a number if it's not null
      const itemIdNumber = +itemId;
  
      this.itemService.getItems().subscribe((data) => {
        this.selectedItem = data.find((item) => item.id === itemIdNumber);
      });
    }
  }
  goBack() {
    // Navigate back to the home page
    this.router.navigate(['/home']);
  }
}  


