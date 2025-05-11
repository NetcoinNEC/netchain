import { createServer } from './api/server';
import { config } from './utils/config';

const startServer = async () => {
    try {
        const server = await createServer();
        const port = config.port || 3000;

        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

startServer();