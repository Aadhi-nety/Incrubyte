🍬 Sweet-INCRUBYTE — Sweet Shop Management System

A modern full-stack web application for managing a sweet shop’s inventory, users, and purchases. Built with React, TypeScript, Tailwind CSS, and Supabase, it provides both customers and admins a responsive, candy-themed interface.

📂 Project Structure

Frontend: React components for catalog, authentication, admin dashboard, and purchase system

Backend / Database: Supabase (PostgreSQL) with Row-Level Security (RLS)

Styling: Tailwind CSS with custom candy-themed UI components

✨ Features
Core Features

User Authentication: Registration, login, and role-based access (User/Admin)

Sweet Catalog: Browse, search, and filter sweets

Purchase System: Place orders with real-time inventory updates

Purchase History: Track user purchases and transactions

Admin Dashboard: Manage sweets inventory, view sales analytics, and restock

Technical Highlights

Real-time updates using Supabase subscriptions

Responsive and mobile-first UI

Role-based access control

Input validation and error handling

Smooth animations with a pastel candy-themed design

🛠 Tech Stack

Frontend: React 18, TypeScript, React Router, React Query

Styling / UI: Tailwind CSS, Shadcn/UI

Backend / Database: Supabase (PostgreSQL) with RLS

Dev Tools: ESLint, Git

🚀 Setup & Installation
Prerequisites

Node.js (v18+)

npm or yarn

Git

Local Development
# Clone the repository
git clone https://github.com/Aadhi-nety/Incrubyte.git
cd Incrubyte

# Install dependencies
npm install

# Start development server
npm run dev


Open in browser: http://localhost:8080

🔐 Security

JWT-based authentication for secure login

Role-based access control for users and admins

Database security via Supabase Row-Level Security

Frontend and backend validation

🎨 Design

Candy-themed pastel colors

Reusable UI components

Smooth transitions and hover effects

Mobile-first responsive design

🗂 Database Schema

Profiles Table: User info, roles (user/admin)

Sweets Table: Name, category, price, stock quantity, image links

Purchases Table: Purchase records, user references, timestamps

🧪 Testing & Validation

Frontend form validations for required fields and correct data types

Backend checks for permissions and data consistency

Graceful error messages and loading states

👥 Role Definitions

Users: Browse sweets, purchase items, view purchase history

Admins: Manage sweet inventory, view sales analytics, update stock

🤖 AI Usage
AI Tools Utilized

Primary Tool: Deepseek and Claude

How AI Contributed

Architecture & Planning

Database schema design with proper relationships

React component structure planning

Row-Level Security and authentication flow guidance

Code Generation & Implementation

Scaffolded core React components (AuthForm, SweetCard, Header, Dashboard)

Generated TypeScript type definitions

Tailwind CSS styling guidance for candy-themed UI

Problem Solving & Debugging

Fixed TypeScript and React runtime issues

Suggested performance optimization using React Query

Guided secure API implementation

Documentation & Testing

Inline code documentation

README structuring and API documentation

Validation and test scenario planning

Reflection on AI Impact

Accelerated Development: Reduced boilerplate and allowed focus on business logic

Best Practices: Ensured modern React patterns and security standards

Human Oversight: All business logic, UX, and integration reviewed manually

📝 License & Purpose

This project is developed for educational/demo purposes. Contributions, forks, and pull requests are welcome.
