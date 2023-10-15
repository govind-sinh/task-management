import { ITasks, STATUS } from '../type/tasks';

export class Tasks implements ITasks {

  id: string;
  title: string;
  description: string;
  creationDate: Date;
  dueDate: Date;
  assignedTo: string;
  category: string;
  status: STATUS;
  private taskData: Tasks[] = [];

  constructor(task:ITasks) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.dueDate = task.dueDate;
    this.assignedTo = task.assignedTo;
    this.category = task.category;
    this.status = task.status;
    this.creationDate = new Date();
  }

  save() {
    this.taskData.push(this);
  }
}