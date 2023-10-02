import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClothingComponent } from './menu-clothing.component';

describe('MenuClothingComponent', () => {
  let component: MenuClothingComponent;
  let fixture: ComponentFixture<MenuClothingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuClothingComponent]
    });
    fixture = TestBed.createComponent(MenuClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
