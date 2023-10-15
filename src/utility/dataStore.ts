import { Tasks, Task } from '../models/tasks';

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
};