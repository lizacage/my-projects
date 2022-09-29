import { Component, Input} from '@angular/core'
import { planetListService } from 'src/app/services/planetList.service'
import { ActivatedRoute } from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication.service'; 


@Component({
    selector: 'app-loginPage',
    templateUrl: './login-page.component.html',
})

export class LoginPageComponent {
    username: string = '';
    password: string = '';
    
    constructor(private as: AuthenticationService) {}
    
    login() {
        this.as.login(this.username, this.password)
            .subscribe(res => {
                alert('logged in')
            });
    }
    
    ngOnInit(): void {
        
    }
}