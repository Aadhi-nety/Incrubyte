# Sweet Shop Management System

A modern, full-stack web application for managing a sweet shop's inventory, user authentication, and purchase system. Built with React, TypeScript, and Prisma with SQL database.
live : https://sweet-stack-ai.vercel.app/

## 🍭 Project Overview

The Sweet Shop Management System is a comprehensive e-commerce solution that allows users to browse and purchase sweets while providing administrators with powerful inventory management tools. The application features a beautiful, candy-themed design with smooth animations and a responsive interface.

## ✨ Features

### Core Features
- **User Authentication**: Secure registration and login system with JWT token-based authentication
- **Sweet Catalog**: Browse and search through available sweets with filtering options
- **Purchase System**: Buy sweets with real-time inventory updates
- **Inventory Management**: Admin panel for managing sweet inventory
- **Purchase History**: Track all user purchases with detailed information
- **Admin Dashboard**: Comprehensive admin interface with sales analytics

### Technical Features
- **Real-time Updates**: Automatic inventory updates after purchases
- **Responsive Design**: Mobile-first design that works on all devices
- **Search & Filter**: Advanced search and filtering by category and price
- **Role-based Access**: Different interfaces for regular users and administrators
- **Data Validation**: Comprehensive input validation and error handling
- **Modern UI**: Beautiful candy-themed design with smooth animations

## 🚀 Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Shadcn/UI
- React Query
- React Router

### Backend & Database
- Prisma ORM
- SQL Database
- JWT Authentication

### Development Tools
- ESLint
- Git

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Local Development Setup

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd sweet-shop-management

# 2. Install dependencies
npm install
# or
yarn install

# 3. Set up environment variables
# Create a .env file in the root with:
# DATABASE_URL="your-database-connection-string"
# JWT_SECRET="your-jwt-secret"

# 4. Start the development server
npm run dev
# or
yarn dev
```
The application will run at http://localhost:3000

### Database Setup
``` bash
1. Initialize Prisma client
npx prisma generate

 2. Run initial migration
npx prisma migrate dev --name init

3. Open Prisma Studio to view/edit database
npx prisma studio
```
### Database schema includes:

- Profiles Table: User profiles with admin roles

- Sweets Table: Sweet inventory with categories, prices, quantities

- Purchases Table: Purchase history and transactions

## 📱 Screenshots

- Home Page - Sweet Catalog: Browse our delightful collection of sweets with search and filter capabilities

- Admin Dashboard: Manage inventory & track sales analytics

- Purchase History: Track all sweet purchases with transaction details

## 🎯 API Endpoints

### Authentication

- `POST /auth/signup` — Register user

- `POST /auth/signin` — Login user

- `POST /auth/signout` — Logout

### Sweets Management

- `GET /api/sweets` — Retrieve all sweets

- `POST /api/sweets` — Create new sweet (Admin only)

- `PUT /api/sweets/:id` — Update sweet (Admin only)

- `DELETE /api/sweets/:id` — Delete sweet (Admin only)

### Purchases

- `GET /api/purchases` — User purchase history

- `POST /api/purchases` — Create purchase

- `GET /api/purchases/all` — Admin: all purchases

## 👥 User Roles

- Regular Users

- Browse and purchase sweets

- View purchase history

- Update profile

- dministrators

- All regular user capabilities

- Add/edit/delete sweets

- Manage inventory

- Access sales analytics & admin dashboard

## Creating an Admin User

-  Register a new account through the application
-  Contact the system administrator to upgrade your account to admin status
-  Or use the pre-configured admin account
admin@sweetshop.com

## 🧪 Testing
- **Frontend Validation:** Real-time form validation  
- **Backend Validation:** Prisma schema constraints  
- **Error Handling:** User-friendly messages and loading states  
- **Security:** Role-based access and protected routes  

**Test Scenarios:**
- Registration/Login flow  
- Sweet browsing & filtering  
- Purchase workflow with inventory updates  
- Admin CRUD operations  
- Unauthorized access prevention  

## 🔒 Security Features
- **JWT Authentication:** Token-based  
- **Role-based Access:** Admin vs regular user  
- **Input Validation:** All form and API inputs validated  

## 🎨 Design System
- **Colors:** Pastel & candy-themed palette  
- **Typography:** Modern, readable fonts  
- **Components:** Reusable, consistent UI elements  
- **Animations:** Smooth hover & transition effects  
- **Responsive:** Mobile-first layout  

## 📊 Performance Optimizations
- **React Query:** Caching & efficient data fetching  
- **Lazy Loading:** Components loaded on demand  
- **Optimized Images & Bundle Splitting:** Faster page loads  
- **Responsive Images:** Adapt to screen sizes  

## 🤖 AI Usage
- **AI Tool:** Claude (Anthropic)  
- Assisted with database structure, React architecture, TypeScript types, Tailwind styling, debugging, performance guidance, and README documentation  

## 📝 License
- This project is for educational purposes and part of a TDD Kata exercise  

## 🤝 Contributing
```bash
# 1. Fork the repository
# 2. Create feature branches
# 3. Submit pull requests
# 4. Report issues or suggest enhancements








