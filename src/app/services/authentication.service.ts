import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  authUser(): Observable<firebase.User | null> {
    return this.user;
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }


}

