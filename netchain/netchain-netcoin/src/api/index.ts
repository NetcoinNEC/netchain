import { Router } from 'express';
import { getSomeData, postSomeData } from './routes';

const apiRouter = Router();

// Define API routes
apiRouter.get('/data', getSomeData);
apiRouter.post('/data', postSomeData);

export default apiRouter;