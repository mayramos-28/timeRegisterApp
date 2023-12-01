import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsidenavbarComponent } from './components/asidenavbar/asidenavbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { TimeRegisterComponent } from './components/time-register/time-register.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/customsMaterial/table/table.component';
import { DetailsModalComponent } from './components/customsMaterial/modals/details-modal/details-modal.component';
import { DeleteModalComponent } from './components/customsMaterial/modals/delete-modal/delete-modal.component';
import { UpdateModalComponent } from './components/customsMaterial/modals/update-modal/update-modal.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    AsidenavbarComponent,
    ProjectsComponent,
    ProjectComponent,
    TimeRegisterComponent,
    TasksComponent,
    TaskComponent,
    TableComponent,
    DetailsModalComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    provideFirebaseApp(() => initializeApp({"projectId":"timeregisterapp-9948b","appId":"1:559565907338:web:70591ae12849a232da5473","storageBucket":"timeregisterapp-9948b.appspot.com","apiKey":"AIzaSyC1oruUWERw5XxaP6jtX_ZeDT1PBpXlhvw","authDomain":"timeregisterapp-9948b.firebaseapp.com","messagingSenderId":"559565907338"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
