import { Router } from 'express';
import { addTask, getTaskById, getTasks, updateTask } from '../handlers/index';

const router : Router =  Router();

router.post('/tasks', addTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask);

export default router;