import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';


import {LoginService} from '../shared/services/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    private user : string="";
    private password : string="";
    constructor(public router: Router,private loginService : LoginService ) {}

    ngOnInit() {}

    onLoggedin() {
        this.loginService.login(this.user,this.password).subscribe(
            (response :Response)=>
            {
                let result=response.json();
                console.log("result");
            },
            (respose:Response)=>
            {
                console.log(respose);
            }
        )
    }
}
