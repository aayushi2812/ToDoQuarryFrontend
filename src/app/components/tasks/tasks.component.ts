import { DatePipe, NgStyle } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DatePipe, NgStyle, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatListModule, MatDividerModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksComponent implements OnInit{

  list: any;
  item: any;
  constructor(private service: TodoListService, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.service.getList().subscribe((data) => {
      this.list = data;
    })
  }

  priority : any = ['High', 'Medium', 'Low'];
  selectedValue: any;
  animalControl = new FormControl(null, Validators.required);
  
  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    deadlineDate: new FormControl(new Date('yyyy-MM-dd'), Validators.required),
    prioritySelected: new FormControl('', Validators.required),
  })
  
  onSubmit(){
    const temp = this.datePipe.transform(this.taskForm.value.deadlineDate, 'yyyy-MM-dd');
    this.item = {
      'taskName' : this.taskForm.value.taskName,
      'dueDate': temp,
      'priority': this.taskForm.value.prioritySelected
    }
    this.service.addToList(this.item).subscribe((data) => {
      this.list = data;
    })
    window.location.reload();
    this.service.getList().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    })
    this.taskForm.reset();
  }

  deleteItem(task: any){
    console.log(task);
    this.service.deleteItem(task.id).subscribe((data) => {
      console.log(data);
    })
    window.location.reload();
  }
}
