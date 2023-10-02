import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from '../service/clothes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clothes-detail',
  templateUrl: './clothes-detail.component.html',
  styleUrls: ['./clothes-detail.component.css']
})
export class ClothesDetailComponent implements OnInit {
  selectedCloth: any = {};

  constructor(private route: ActivatedRoute, private clothesService: ClothesService, private router: Router) {}

  ngOnInit(): void {
    const clothId = this.route.snapshot.paramMap.get('id');
  
    if (clothId !== null) {
      // Convert clothId to a number if it's not null
      const clothIdNumber = +clothId;
  
      this.clothesService.getClothes().subscribe((data) => {
        console.log(data);
        this.selectedCloth = data.find((cloth) => cloth.id === clothIdNumber);
        console.log(this.selectedCloth);
      });
    }
  }
  goBack() {
    // Navigate back to the home page
    this.router.navigate(['/home']);
  }
}  


