import { Router } from 'express';
import { addTask, getTaskById, getTasks } from '../handlers/index';

const router : Router =  Router();

router.post('/tasks', addTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);

export default router;