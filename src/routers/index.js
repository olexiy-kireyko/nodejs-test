import { Router } from 'express';
import studentsRouter from '../routers/students.js';
import usersRouter from '../routers/auth.js';

const router = Router();
router.use('/students', studentsRouter);
router.use('/studentsUsers', usersRouter);

export default router;
