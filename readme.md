# 🍔 Food Ordering App

A full-stack food ordering application built with **React.js**, **Node.js**, **Express**, and **MongoDB**. This app allows users to browse food items, place orders, make payments, and receive order confirmations via email. It includes authentication and authorization, with support for OAuth login.

---

## 📝 Features

- **User Authentication**:

  - Secure signup/login with email verification.
  - OAuth login options for convenience.

- **Food Ordering**:

  - View a menu of available food items with categories.
  - Add items to cart and customize order options (e.g., quantity, preferences).

- **Payment Integration**:

  - Integrated payment gateway for secure online transactions.

- **Order Confirmation**:

  - Receive email confirmation upon successful order placement.

- **Admin Panel**:
  - Manage menu items (add, update, delete).
  - View and manage customer orders.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT for secure session handling, OAuth (Google)
- **Payment Gateway**: Stripe (or your preferred gateway)
- **Email Service**: Nodemailer

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** and **npm** (Node Package Manager)
- **MongoDB** database instance
- A **Stripe** account for payment gateway setup
- OAuth credentials (e.g., Google OAuth) for social login

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KDDilshan/Food-Ordering-Application.git
   cd food-order
   ```

2. **Install dependencies for both frontend and backend**:

   ```bash
   cd Frontend
   npm install

   cd ../backend
   npm install
   ```

3. **Environment Setup**:

   - Create `.env` file in the server directory with the following:

     ```env
     MONGODB_URI=your-mongodb-connection-string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     EMAIL_SERVICE_API_KEY=your_email_service_api_key
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     ```

4. **Run the application**:

   - Start the server:

     ```bash
     cd server
     npm run dev
     ```

   - Start the client:

     ```bash
     cd client
     npm start
     ```

5. **Access the app**: Open `http://localhost:3000` in your browser.

---

## 📂 Folder Structure

- **Frontend/** - React.js frontend code
- **Backend/** - Node.js backend API
- **models/** - MongoDB models (User, Order, etc.)
- **controllers/** - API business logic (order, payment, etc.)
- **routes/** - API routes for authentication, orders, payments, etc.

---

## 📑 API Documentation

### **Authentication**

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login an existing user
- `GET /api/auth/google` - OAuth login with Google

### **Food Menu**

- `GET /api/menu` - Fetch menu items
- `POST /api/menu` - Add a new menu item (Admin only)
- `PUT /api/menu/:id` - Update menu item (Admin only)
- `DELETE /api/menu/:id` - Delete menu item (Admin only)

### **Orders**

- `POST /api/orders` - Place a new order
- `GET /api/orders/:id` - Get order details

---

## 🔒 Security & Authorization

- **JWT-based authentication** for user sessions.
- **OAuth 2.0** with Google for social login.
- **Role-based access control** to limit admin functionalities (like menu and order management).

---

## ✉️ Email Notifications

Order confirmation emails are sent using **Nodemailer** with the configured email service provider. Configure your email API key in `.env` for email functionality.

---

## 💳 Payment Integration

The app uses **Stripe** for secure online payments. Add your payment provider’s secret key in the `.env` file to enable payments.

---

## 🖥️ Deployment

1. Deploy the **frontend** (e.g., Vercel, Netlify).
2. Deploy the **backend** (e.g., Heroku, AWS, DigitalOcean).
3. Configure environment variables for production in each deployment environment.

---

## 🛠️ Future Improvements

- Implement a recommendation system for users based on past orders.
- Add multi-language support.
- Improve UI/UX for better user experience.

---

## 📝 License

This project is licensed under the MIT License.

---

## 📧 Contact

If you have questions or issues, feel free to reach out!

---

Enjoy your food ordering app! 🍕
