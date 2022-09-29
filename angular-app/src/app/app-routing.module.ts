import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { ResidentListComponent } from './pages/residentList-page/residentList-page.component';
import { ResidentPageComponent } from './pages/resident-page/resident-page.component';
import { LoginPageComponent } from './pages/login-page.component/login-page.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'planet', component: PlanetPageComponent},
  {path: 'residents', component: ResidentListComponent},
  {path: 'residentPage', component: ResidentPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
