import express from 'express';
import {
  purchaseSweet,
  restockSweet
} from '../controllers/inventoryController';
import { authenticateToken, requireAdmin } from '../middleware/auth';

const router = express.Router();

router.post('/sweets/:id/purchase', authenticateToken, purchaseSweet);
router.post('/sweets/:id/restock', authenticateToken, requireAdmin, restockSweet);

export default router;
