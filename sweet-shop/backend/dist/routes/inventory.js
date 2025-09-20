"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inventoryController_1 = require("../controllers/inventoryController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post('/sweets/:id/purchase', auth_1.authenticateToken, inventoryController_1.purchaseSweet);
router.post('/sweets/:id/restock', auth_1.authenticateToken, auth_1.requireAdmin, inventoryController_1.restockSweet);
exports.default = router;
