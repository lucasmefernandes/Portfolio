import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { InstitutionsComponent } from './components/pages/institutions/institutions.component';
import { NecessityComponent } from './components/pages/necessity/necessity.component';
import { RegisterComponent } from './components/pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'institutions',
    component: InstitutionsComponent,
  },
  {
    path: 'necessity',
    component: NecessityComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
