import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import {MatListModule} from '@angular/material/list';
import { LandingpageComponent } from "./components/landingpage/landingpage.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from "@angular/common";

@NgModule({
    declarations:[
        TopNavComponent, SignUpComponent
    ],
    imports:[
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatListModule,
        MatDatepickerModule
    ],
    providers: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule { }