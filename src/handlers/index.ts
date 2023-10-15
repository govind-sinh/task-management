import { Response, Request } from 'express';
import { Tasks, Task } from '../models/tasks';

// Add Task
export const addTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body } = req;
    await new Tasks(body).save();
    res.status(201).json({ message: 'Task added' });
  } catch (error) {
    console.log('Error add task:', error);
    res.status(500).json({ message: 'Error adding task' });
  }
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: Task[] = await new Tasks().getTasks();
    res.status(200).json({ tasks });
  } catch (error) {
    console.log('Error get task:', error);
    res.status(500).json({ message: 'Error get tasks' });
  }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { params: { id } } = req;
    const task: Task = await new Tasks().getTaskById(id);
    res.status(200).json({ task });
  } catch(err) {
    console.log('Error get task by id:', err);
    res.status(500).json({ message: 'Error get task by id' });
  }
};

