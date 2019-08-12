import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      if (user) {
        this.user = user;
        console.log(JSON.stringify(user));
        console.log('Redirect to Home');
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['home']);
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
