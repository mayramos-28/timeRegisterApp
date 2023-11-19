import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component: DashboardComponent, ...canActivate( () => redirectUnauthorizedTo('/login'))},
  {path:'profile', component: ProfileComponent, ...canActivate( () => redirectUnauthorizedTo('/login'))},
  {path:'projects', component: ProjectComponent, ...canActivate( () => redirectUnauthorizedTo('/login'))},
  {path:'project/:id', component: ProjectComponent, ...canActivate( () => redirectUnauthorizedTo('/login'))},
  {path:'tasks', component: TaskComponent},
  {path:'**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
