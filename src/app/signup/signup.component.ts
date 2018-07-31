
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {Router} from '@angular/router';
import {LoginService} from '../shared/services/login.service';
import {Registration} from '../shared/models/Registration';
import { log } from 'util';
import {ApplicationConstants} from '../shared/APPLICATION_CONSTANTS';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    registration: Registration;
    router: Router;
    loginService : LoginService;
    message:string;
    roles:string[];
    constructor(loginService: LoginService)
    {
        this.loginService=loginService;
    }
    ngOnInit()
    {
        //initializing model
        this.registration= new Registration();
        this.roles=ApplicationConstants.Roles;
        this.registration.role= this.roles[0];
    }
    onOptionsSelected(event)
    {
        this.registration.role=event.target.value;
    }
    register(event:any)
    {
        this.loginService.register(this.registration).subscribe((res:boolean)=>{
            if(res)
                this.message="You are registered sucessfully.";
            else
                this.message="Incorrect data";     
        },
        (error:any)=>
        {
            console.log(error);
            this.message="Invalid request.";
        }
    );
        
    }
}
