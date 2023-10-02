import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    // Check if the password and confirm password match
    if (this.formData.password !== this.formData.confirmPassword) {
      // Handle password mismatch (e.g., show an error message)
      alert('Password and Confirm Password do not match.');
    } else {
      console.log(this.formData);
    }
     // Display a confirmation message
     alert('Registered Successfully');

     // Navigate to the login page
     this.router.navigate(['/login']);
  }
  goBack() {
    // Navigate back to the user page
    this.router.navigate(['/user']);
  }  
}
