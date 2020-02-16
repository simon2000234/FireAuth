import { Component, OnInit } from '@angular/core';
import {User} from '../services/user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  User: User;
  constructor() { }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('currentUser'));
  }

}
