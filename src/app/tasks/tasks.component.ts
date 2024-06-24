import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatListModule, DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksComponent {
  priority : any = ['High', 'Medium', 'Low'];
  tasks: any = [
    {taskName: 'sax', deadlineDate: 'Tue Jun 11 2024 00:00:00 GMT-0400 (Eastern Daylight Time)', prioritySelected: 'Medium'}]
  selectedValue: any;
  animalControl = new FormControl(null, Validators.required);
  
  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    deadlineDate: new FormControl('', Validators.required),
    prioritySelected: new FormControl('', Validators.required),
  })

  onSubmit(){
    console.log(this.taskForm.value);
    this.tasks.push(this.taskForm.value);
    console.log(this.tasks);
    this.taskForm.reset();
  }
}
