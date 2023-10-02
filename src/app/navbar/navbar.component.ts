import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, public userService: UserService) {}

  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  logout() {
    // Clear the login status and username
    this.userService.setLoggedInStatus(false);
    this.userService.setUsername('');

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
