import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"timeregisterapp-9948b","appId":"1:559565907338:web:70591ae12849a232da5473","storageBucket":"timeregisterapp-9948b.appspot.com","apiKey":"AIzaSyC1oruUWERw5XxaP6jtX_ZeDT1PBpXlhvw","authDomain":"timeregisterapp-9948b.firebaseapp.com","messagingSenderId":"559565907338"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
