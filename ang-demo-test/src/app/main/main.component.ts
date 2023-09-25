import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  username = 'Test';
  password = '';
  errorMessage = 'Invalid credentials';
  isInvalidUserLogin = false;

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  handlelogin() {
    console.log('username is : '+ this.username)
    console.log('password is : '+ this.password)
    this.login.handleLogin(this.username, this.password).subscribe(res => {
      console.log('res is : '+ res);
      if(res === true ){
        console.log('loging successful.........')
      this.router.navigate(['welcome'])
      } else {
        this.isInvalidUserLogin = true;
      }
    });

    // if(!this.login.handleLogin(this.username, this.password)) {
    //   this.isInvalidUserLogin = true;
    // } else {
    //   console.log('loging successful.........')
    //   this.router.navigate(['welcome'])
    // }
  }  

}
