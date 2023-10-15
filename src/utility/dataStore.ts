import { Task } from '../models/tasks';

export class TaskStorage {
  private static instance: TaskStorage;

  private tasks: { [key: string]: Task } = {};

  private constructor() { }

  public static getInstance(): TaskStorage {
    if (!TaskStorage.instance) {
      TaskStorage.instance = new TaskStorage();
    }

    return TaskStorage.instance;
  }

  public addTask(task: Task) {
    this.tasks[task.id] = task;
  }

  public getTasks() {
    return Object.values(this.tasks);
  }

  public getTaskById(id: string) {
    return this.tasks[id];
  }

  public updateTask(id: string, task: Task) {
    const {
      title, description, dueDate, assignedTo, category,
      status
    } = task;
    const existingTask = this.getTaskById(id);
    this.tasks[id] = {
      ...existingTask,
      title,
      description,
      dueDate,
      assignedTo,
      category,
      status
    };
  }
}
