import express from 'express';
import routes from './routes';

export function startServer() {
    const app = express();
    app.use(express.json());
    app.use('/api', routes);
    app.listen(3000, () => console.log('NETCHAIN API listening on port 3000'));
}