import { Tasks } from '../models/tasks';

export class TaskStorage {
  private static instance: TaskStorage;

  private tasks: Tasks[] = [];

  private constructor() { }

  public static getInstance(): TaskStorage {
    if (!TaskStorage.instance) {
      TaskStorage.instance = new TaskStorage();
    }

    return TaskStorage.instance;
  }

  public addTask (task: any) {
    this.tasks.push(task);
  }

  public getTasks () {
    return [...this.tasks];
  }
};