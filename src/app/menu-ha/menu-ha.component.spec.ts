import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHAComponent } from './menu-ha.component';

describe('MenuHAComponent', () => {
  let component: MenuHAComponent;
  let fixture: ComponentFixture<MenuHAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuHAComponent]
    });
    fixture = TestBed.createComponent(MenuHAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
