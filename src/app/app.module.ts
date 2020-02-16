import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';


const config = {
  apiKey: 'AIzaSyCmRiEbYtn_y-7-2vtGs0-oE6NZ8zTizdk',
  authDomain: 'fireauth-e05a4.firebaseapp.com',
  databaseURL: 'https://fireauth-e05a4.firebaseio.com',
  projectId: 'fireauth-e05a4',
  storageBucket: 'fireauth-e05a4.appspot.com',
  messagingSenderId: '753423340742',
  appId: '1:753423340742:web:c7363a7f8cfc491c6bf3c7',
  measurementId: 'G-TXSGWZ1956'
};
@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
