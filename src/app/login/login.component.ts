import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserService) { }

  onSubmit() {
    // checks if feilds are not empty, sets login status to true in UserService
    if (this.formData.username && this.formData.password) {
      // Store the username and login status in the user service
      this.userService.setLoggedInStatus(true);
      this.userService.setUsername(this.formData.username);

      // Display a confirmation message
      alert('SuccessFully LoggedIn. Welcome ' + this.formData.username + '!');

      // Navigate to the home page
      this.router.navigate(['/home']);
    }
  }
  goBack() {
    // Navigate back to the user page
    this.router.navigate(['/user']);
  }
}
