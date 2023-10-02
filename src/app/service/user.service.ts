import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isLoggedIn = false;
  private username = '';

  // Setter for login status
  setLoggedInStatus(status: boolean) {
    this.isLoggedIn = status;
  }

  // Getter for login status
  getLoggedInStatus() {
    return this.isLoggedIn;
  }

  // Setter for username
  setUsername(username: string) {
    this.username = username;
  }

  // Getter for username
  getUsername() {
    return this.username;
  }
}
