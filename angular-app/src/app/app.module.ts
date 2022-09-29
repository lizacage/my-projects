import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FilterGenderPipe } from './pipes/filter-gender.pipe';
import { ResidentListComponent } from './pages/residentList-page/residentList-page.component';
import { ResidentComponent } from './components/resident/resident.component';
import { ResidentPageComponent } from './pages/resident-page/resident-page.component';
import { LoginPageComponent } from './pages/login-page.component/login-page.component';
import { ACCES_TOKEN_KEY } from './services/authentication.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { BoldDirective } from 'src/directives/bold-directive';

export function tokenGetter() {
  return localStorage.getItem(ACCES_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    MainPageComponent,
    PlanetPageComponent,
    FilterGenderPipe,
    ResidentListComponent,
    ResidentComponent,
    ResidentPageComponent,
    LoginPageComponent,
    RegistrationComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
