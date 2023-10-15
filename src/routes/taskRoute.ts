import { Router } from 'express';
import { addTask, getTasks } from '../handlers/index';

const router : Router =  Router();

router.post('/tasks', addTask);
router.get('/tasks', getTasks);

export default router;