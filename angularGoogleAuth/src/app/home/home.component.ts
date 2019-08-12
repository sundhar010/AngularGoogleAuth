import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: SocialUser;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
    let strUsr  = localStorage.getItem('user');
    this.user = JSON.parse(strUsr);
  }
  signOut(): void {
    this.authService.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    });
  }

}
