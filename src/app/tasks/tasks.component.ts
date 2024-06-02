import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksComponent {
  datePicker!: FormControl;
  priority : any = ['High', 'Medium', 'Low'];
  selectedValue: any;
}
