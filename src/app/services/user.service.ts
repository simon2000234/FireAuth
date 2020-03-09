import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireAuth: AngularFireAuth,
              private fireStore: AngularFirestore,
              private router: Router) { }


  getUser(id: number): Observable<User> {
    const userFromDB = this.fireStore.doc<User>('users/' + id);
    return userFromDB.snapshotChanges()
      .pipe(
        map(returned => {
          const userfromDB = returned.payload.data();
          const user2return: User = {
            uid: userfromDB.uid,
            email: userfromDB.email,
            name: userfromDB.name,
            bio: userfromDB.bio,
            role: userfromDB.role
          };
          return user2return;
        }));
  }
  updateUser(newUser: User) {
    this.fireStore.doc<User>('users/' + newUser.uid).set(newUser);
  }
}
