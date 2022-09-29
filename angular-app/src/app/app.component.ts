import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    // this.authService.redirect()
  }
}
