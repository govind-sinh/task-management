import { ITasks, STATUS } from '../type/tasks';
import { TaskStorage } from '../utility/dataStore';

export class Tasks implements ITasks {

  id: string = Date.now().toString(36);
  title: string;
  description: string;
  creationDate: Date = new Date();
  dueDate: Date;
  assignedTo: string;
  category: string;
  status: STATUS = STATUS.PENDING;
  taskStore: TaskStorage = TaskStorage.getInstance();

  constructor(task?:ITasks) {
    if (task) {
      this.title = task.title;
      this.description = task.description;
      this.dueDate = task.dueDate;
      this.assignedTo = task.assignedTo;
      this.category = task.category;
      this.status = task.status;
    }
  }

  save() {
    this.taskStore.addTask({
      id: this.id,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      assignedTo: this.assignedTo,
      category: this.category,
      status: this.status,
      creationDate: this.creationDate
    });
  }

  getTasks(assignedTo?: any, category?: any) {
    return this.taskStore.getTasks(assignedTo, category);
  }

  getTaskById(id: string) {
    return this.taskStore.getTaskById(id);
  }

  deleteTaskById(id: string) {
    return this.taskStore.deleteTask(id);
  }

  updateTask(id: string, task: Task) {
    return this.taskStore.updateTask(id, task);
  }
}

export type Task = Pick<Tasks,
  'title' | 'description' | 'creationDate' | 'assignedTo' | 'category' | 'dueDate' | 'id' | 'status'>;