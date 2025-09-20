import express from 'express';
import {
  createSweet,
  getAllSweets,
  getSweetById,
  updateSweet,
  deleteSweet,
  searchSweets
} from '../controllers/sweetController';
import { authenticateToken, requireAdmin } from '../middleware/auth';

const router = express.Router();

router.post('/', authenticateToken, requireAdmin, createSweet);
router.get('/', getAllSweets);
router.get('/search', searchSweets);
router.get('/:id', getSweetById);
router.put('/:id', authenticateToken, requireAdmin, updateSweet);
router.delete('/:id', authenticateToken, requireAdmin, deleteSweet);

export default router;
