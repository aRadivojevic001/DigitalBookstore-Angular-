import { NgModule } from "@angular/core";
import {Routes,  RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { WelcomeComponent } from "./home/welcome/welcome.component";
import { PreviousBookCartComponent } from "./book-cart/previous-book-cart/previous-book-cart.component";
import { BookCartComponent } from "./book-cart/book-cart.component";



const rute : Routes = [
    
    {path : '',component : WelcomeComponent},
    {path : 'signup',component : SignupComponent},
    {path : 'login',component : LoginComponent},
    {path : 'cart',component : BookCartComponent}

]

@NgModule({
    
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]
})

export class RoutingModule{}