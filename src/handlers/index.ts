import { Response, Request } from 'express';
import { Tasks } from '../models/tasks';

// Add Task
export const addTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body } = req;
    await new Tasks(body).save();
    res.status(201).json({ message: 'Task added'});
  } catch (error) {
    res.status(500).json({ message: 'Error adding task', error })
  }
};
