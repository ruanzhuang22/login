import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserLogged } from 'src/app/helpers/userlogged';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output("logged-in") logedIn: EventEmitter<boolean>;
  @Input() public item: string
  private loginService : LoginService;
  formLogin: FormGroup;
  submitted: boolean
  isShowError: boolean;
  messageError: string


  constructor(loginService: LoginService,   private router: Router) { 
    this.loginService = loginService;
    this.submitted= false;
    this.isShowError= false
    this.logedIn = new EventEmitter<boolean>();
  }

  ngOnInit() {
      this.formLogin = new FormGroup({
        userName: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }


  ngOnChanges() {
    if(this.item != null) {
      this.formLogin = new FormGroup({
        userName: new FormControl(this.item, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(3)])
      });
    }
    else {
      this.formLogin = new FormGroup({
        userName: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(3)])
      });
    }
  }

  login(){
    if (this.formLogin.invalid) {
      this.submitted = true;
      return;
    }
    let userName: string = this.formLogin.get('userName').value;
    let password: string = this.formLogin.get('password').value;
    const sub = this.loginService.login(userName, password).pipe(finalize(()=>{
      sub.unsubscribe();
    })).subscribe({
      next: (res: any) =>{
        if (res.Status == 0) {
          this.isShowError = false;
          let userLogged: UserLogged = new UserLogged();
          userLogged.setCurrentUser(res.token,res.userId, res.id);
          this.router.navigate(['home']);
          this.formLogin.get('userName').setValue('');
          this.formLogin.get('password').setValue('');
          this.submitted = false;
        }
          },
      error: (err) => {
        if (!!err.error && err.error.user === null) {
          this.logedIn.emit(false);
          this.isShowError = true;
          this.messageError = err["error"].message;
          return;
        }
        setTimeout(()=>{
          this.isShowError = false;
      }, 3000);
        console.error(err);
        alert('Server Error');
      },
    })
  }
  

}
