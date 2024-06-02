import { Routes } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [{
    path: '',
    component: AppComponent,
    children: [
        {
            path: '',
            component: TopNavComponent
        },
        {
            path: 'login',
            component: SignUpComponent
        },
        {
            path: 'signup',
            component: SignUpComponent
        },
        {
            path: 'landingpage',
            component: LandingpageComponent
        }
    ]
}];
