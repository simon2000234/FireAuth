import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'profile', component: ProfilePageComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
