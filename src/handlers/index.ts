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
    const { query: { assignedTo, category } } = req;
    const tasks: Task[] = await new Tasks().getTasks(assignedTo, category);
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

export const updateTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { params: { id }, body: task } = req;
    const taskExist = new Tasks().getTaskById(id);
    
    if (!taskExist) {
      return res.status(400).json({ message: 'Task does not exist' });
    }
    
    await new Tasks().updateTask(id, task);

    return res.status(200).json({ message: 'Task updated' });
  } catch(err) {
    console.log('Error update task:', err);
    res.status(500).json({ message: 'Error update task' });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { params: { id } } = req;
    const taskExist = new Tasks().getTaskById(id);
    
    if (!taskExist) {
      return res.status(400).json({ message: 'Task does not exist' });
    }
    
    await new Tasks().deleteTaskById(id);

    return res.status(200).json({ message: 'Task removed' });
  } catch(err) {
    console.log('Error delete task:', err);
    res.status(500).json({ message: 'Error delete task' });
  }
};

