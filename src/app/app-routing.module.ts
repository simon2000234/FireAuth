import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'profile', loadChildren: () => import('./profile-page/profile-page.module').then(m => m.ProfilePageModule) }
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
