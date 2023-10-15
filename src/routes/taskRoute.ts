import { Router } from 'express';
import { addTask } from '../handlers/index';

const router : Router =  Router();

router.post('/tasks', addTask);

export default router;