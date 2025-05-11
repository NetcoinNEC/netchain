import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
    res.json({ status: 'NETCHAIN node running' });
});

export default router;