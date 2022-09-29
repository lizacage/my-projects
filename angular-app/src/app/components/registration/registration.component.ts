import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service'; 

type MyFormType = {
  username: string;
  password: string;
}

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
})

export class RegistrationComponent implements OnInit {
    form: any = {
        username: null,
        password: null
    };
    myForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    
    constructor(private authService: AuthenticationService) {
    }
    ngOnInit(): void {
        
    }
    onSubmit(): void {
        const { username, password } = this.myForm.controls;
        debugger
        if (username.value && password.value) {
          this.authService.register(username.value, password.value).subscribe({
            next: data => {
              console.log(data);
              this.isSuccessful = true;
              this.isSignUpFailed = false;
              console.log(username.value, password.value)
            },
            error: err => {
              this.errorMessage = err.error.message;
              this.isSignUpFailed = true;
            }
          });
        }
        
      } 
}