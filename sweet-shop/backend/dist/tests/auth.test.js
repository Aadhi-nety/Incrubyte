"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const client_1 = require("@prisma/client");
// Create a new Prisma client for testing
const prisma = new client_1.PrismaClient();
describe('Auth API', () => {
    beforeAll(async () => {
        // Clean up any existing test data
        await prisma.user.deleteMany();
    });
    afterAll(async () => {
        await prisma.$disconnect();
    });
    describe('POST /api/auth/register', () => {
        it('should register a new user', async () => {
            const userData = {
                email: 'test@example.com',
                password: 'password123',
                name: 'Test User'
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/auth/register')
                .send(userData);
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('token');
            expect(response.body.user).toHaveProperty('email', userData.email);
            expect(response.body.user).toHaveProperty('name', userData.name);
            expect(response.body.user).not.toHaveProperty('password');
        });
        it('should not register user with existing email', async () => {
            const userData = {
                email: 'test@example.com', // Same email as previous test
                password: 'password123',
                name: 'Test User 2'
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/auth/register')
                .send(userData);
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error', 'User already exists');
        });
        it('should validate input data', async () => {
            const invalidUserData = {
                email: 'invalid-email',
                password: 'short',
                name: 'T'
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/auth/register')
                .send(invalidUserData);
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
        });
    });
    describe('POST /api/auth/login', () => {
        it('should login with valid credentials', async () => {
            const loginData = {
                email: 'test@example.com',
                password: 'password123'
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/auth/login')
                .send(loginData);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
            expect(response.body.user).toHaveProperty('email', loginData.email);
            expect(response.body.user).not.toHaveProperty('password');
        });
        it('should not login with invalid credentials', async () => {
            const loginData = {
                email: 'test@example.com',
                password: 'wrongpassword'
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/auth/login')
                .send(loginData);
            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('error', 'Invalid credentials');
        });
        it('should validate input data', async () => {
            const invalidLoginData = {
                email: 'invalid-email',
                password: ''
            };
            const response = await (0, supertest_1.default)(app_1.default)
                .post('/api/auth/login')
                .send(invalidLoginData);
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
        });
    });
});
