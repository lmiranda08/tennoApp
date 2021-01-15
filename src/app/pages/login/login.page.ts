import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

export class User {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = new User();

  constructor(public fAuth: AuthService) { }

  ngOnInit() {
  }

  async login(){
    this.fAuth.logIn( this.user.email, this.user.password);
    this.user.password = '';
  }

  resetearPass( email: string ){
    this.fAuth.sendEmail(  this.user.email );
  }

  

}
