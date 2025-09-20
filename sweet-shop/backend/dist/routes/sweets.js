"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sweetController_1 = require("../controllers/sweetController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post('/', auth_1.authenticateToken, auth_1.requireAdmin, sweetController_1.createSweet);
router.get('/', sweetController_1.getAllSweets);
router.get('/search', sweetController_1.searchSweets);
router.get('/:id', sweetController_1.getSweetById);
router.put('/:id', auth_1.authenticateToken, auth_1.requireAdmin, sweetController_1.updateSweet);
router.delete('/:id', auth_1.authenticateToken, auth_1.requireAdmin, sweetController_1.deleteSweet);
exports.default = router;
