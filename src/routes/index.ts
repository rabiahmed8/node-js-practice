import express from 'express';
// import { Router } from 'express';
import prodectsRoute from './products';
import loginRoute from './login';
import tasksRoute from './tasks';


const router = express.Router();

router.use('/login',loginRoute);
router.use('/tasks',tasksRoute);

export default router

