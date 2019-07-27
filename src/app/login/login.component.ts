import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  login = new Login();

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])

    })
  }

  checkLogin(): void{
    this.loginService.checkLogin(this.login)
      .subscribe((response) => {
        console.log(response);
        // this.reset();
        }, (error) =>{
        console.log(error);
      }); 
  }


  private reset(){
    this.login.username = null;
    this.login.password = null;
  }
}
