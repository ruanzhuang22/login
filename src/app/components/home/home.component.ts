import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogged } from 'src/app/helpers/userlogged';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userLogin: boolean = true;
  username: string;
  userNameAbbreviations: string='';
  constructor(
    private router: Router
    ) {
    this.router = router;
    
   }

  ngOnInit() {
    this.userLogin = false;
    let userLogged: UserLogged = new UserLogged();
    if (userLogged.isLogged()) {
      this.userLogin = true;
      let user = userLogged.getCurrentUser();
      this.username = user.userName;
      if(this.username.length>19){
        this.userNameAbbreviations = this.username.substring(0,15)+"..."
      } else {
        this.userNameAbbreviations = this.username;
      }
    }
  }

  logout(){
    let userLogged: UserLogged = new UserLogged();
    userLogged.logout();
    this.router.navigate([""]);
  }
}
