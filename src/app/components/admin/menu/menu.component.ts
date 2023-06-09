import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  user: Observable<firebase.User | null>;
  constructor(private authServ: AuthenticationService, private router: Router) {}

  ngOnInit() {
      this.user = this.authServ.authUser();
  }

  sair() {
    this.authServ.logout().then(() => this.router.navigate(['/']));
  }

}
