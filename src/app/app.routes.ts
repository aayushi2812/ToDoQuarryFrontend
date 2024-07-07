import { Routes } from '@angular/router';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

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
