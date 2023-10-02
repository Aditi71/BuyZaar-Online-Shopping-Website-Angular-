import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface BannerItem {
  title: string;
  image: string;
}

@Component({
  selector: 'app-slider-banner',
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('active', style({ transform: 'translateX(0)' })),
      state('inactive', style({ transform: 'translateX(-100%)' })),
      transition('* => active', animate('500ms ease-in')),
      transition('active => *', animate('500ms ease-out')),
    ]),
  ]

})
export class SliderBannerComponent implements OnInit {
  currentIndex = 0;
  items: BannerItem[] = []; // An array to store banner items

  ngOnInit(): void {
    // Define banner items and populate the 'items' array
    this.items = [
      {
        title: 'Banner 1',
        image: '../assets/summer-sale-banner.png',
      },
      {
        title: 'Banner 2',
        image: '../assets/megasale-banner.png',
      },
      {
        title: 'Banner 3',
        image: '../assets/ha-banner.png',
      },
      {
        title: 'Banner 4',
        image: '../assets/cloth-sale-banner.jpg',
      },
    ];

    // Set the interval for sliding
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.items.length) {
        this.currentIndex = 0;
      }
    }, 2000);
  }
}
