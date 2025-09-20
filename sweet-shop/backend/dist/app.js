"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const sweets_1 = __importDefault(require("./routes/sweets"));
const inventory_1 = __importDefault(require("./routes/inventory"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/auth', auth_1.default);
app.use('/api/sweets', sweets_1.default);
app.use('/api/inventory', inventory_1.default);
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});
// Error handling middleware
app.use(errorHandler_1.errorHandler);
// Export the app as a module
exports.default = app; // ← Make sure this line exists!
