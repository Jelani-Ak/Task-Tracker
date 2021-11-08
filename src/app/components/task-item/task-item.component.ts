import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleDescription: EventEmitter<Task> = new EventEmitter();

  descriptionShow!: boolean;
  subscription!: Subscription;

  faTimes = faTimes;

  constructor(private uiService: UiService, private taskService: TaskService) {
    this.subscription = this.uiService
      .onToggleDescription()
      .subscribe((value) => (this.descriptionShow = value));
  }

  ngOnInit(): void {}

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  toggleReminder(task: Task) {
    this.onToggleReminder.emit(task);
  }

  toggleDescription(task: Task) {
    this.onToggleDescription.emit(task);
  }
}
