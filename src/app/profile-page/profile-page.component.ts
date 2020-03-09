import { Component, OnInit } from '@angular/core';
import {User} from '../services/user.model';
import {UserService} from '../services/user.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  User: User;
  userForm = this.fb.group({
    bio: ['']
  });
  constructor(private us: UserService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    const Id = JSON.parse(localStorage.getItem('currentUser'));
    this.us.getUser(Id).subscribe(user => this.User = user);
  }

  update() {
    const UpdatedUser: User = {
      bio: this.userForm.value.bio,
      role: this.User.role,
      name: this.User.name,
      email: this.User.email,
      uid: this.User.uid
    };
    this.us.updateUser(UpdatedUser);
  }

}
