import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private showDescription: boolean = false;
  private subjectAddTask = new Subject<any>();
  private descriptionAddTask = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    console.log('Task form toggled');
    this.showAddTask = !this.showAddTask;
    this.subjectAddTask.next(this.showAddTask);
  }

  toggleDescription(){
    console.log('Descriptions toggled');
    this.showDescription = !this.showDescription;
    this.descriptionAddTask.next(this.showDescription);
  }

  onToggleAddTask(): Observable<any> {
    return this.subjectAddTask.asObservable();
  }

  onToggleDescription(): Observable<any> {
    return this.descriptionAddTask.asObservable();
  }
}
