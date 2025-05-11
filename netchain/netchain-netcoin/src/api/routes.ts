import { Router } from 'express';
import { getSomeData, postSomeData } from './handlers';

const router = Router();

// Define API routes
router.get('/data', getSomeData);
router.post('/data', postSomeData);

export default router;