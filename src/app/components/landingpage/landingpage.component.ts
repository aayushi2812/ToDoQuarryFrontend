import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [SideNavComponent, TasksComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
