📦 ### Node.js REST API

# This project is a RESTful API built with Node.js, Express, and MongoDB
## Developed as part of the GoIT Node.js course (homework assignments 2–6). It includes user authentication, contact management, and email verification functionalities.

## 🚀 Features

    - User Authentication: Register, login, logout, and manage user sessions using JWT.

    - Contact Management: Create, read, update, and delete contacts with support for marking favorites.

    - Email Verification: Send verification emails to new users using Nodemailer.

    - Avatar Upload: Upload and manage user avatars with image processing.

    - Input Validation: Validate incoming data using Joi schemas.

    - Error Handling: Centralized error handling middleware for consistent API responses.
    - github.com
    - github.com+1github.com+1

## 🛠️ Technologies Used

    - Node.js: JavaScript runtime environment.

    - Express.js: Web framework for building APIs.

    - MongoDB: NoSQL database for data storage.

    - Mongoose: ODM for MongoDB.

    - JWT (jsonwebtoken): For secure authentication.

    - Nodemailer: For sending emails.

    - Multer: Middleware for handling file uploads.

    - Joi: Data validation library.

    - Gravatar: For default user avatars.

    - dotenv: Loads environment variables from a .env file.
    - github.com+4github.com+4github.com+4

## 📂 Project Structure

- ├── controllers/        # Route handlers
- ├── helpers/            # Utility functions
- ├── middlewares/        # Custom middleware
- ├── models/             # Mongoose schemas
- ├── routes/             # API routes
- ├── public/avatars/     # Uploaded avatars
- ├── temp/               # Temporary files
- ├── app.js              # Express app setup
- ├── server.js           # Server entry point
- ├── .env.example        # Environment variable example
- ├── package.json        # Project metadata and scripts
- └── README.md           # Project documentation

## ⚙️ Getting Started
# Prerequisites

   Node.js installed

   MongoDB instance or account

# Installation

    Clone the repository:

     git clone https://github.com/MariiaHutsul25/nodejs-homework-2-6-rest-api.git
     cd nodejs-homework-2-6-rest-api

     Install dependencies:

    npm install

    Configure environment variables:

        - Create a .env file in the root directory.

        - Copy the contents of .env.example into .env.

        - Replace placeholder values with your actual configuration.
        - ithub.com+1github.com+1

    DB_HOST=your_mongodb_connection_string
    SECRET_KEY=your_jwt_secret_key

## Running the Application

    - Development mode:

  - npm run start:dev

    - Production mode:

  - npm start

# 📬 API Endpoints
# Authentication

    -Register: POST /api/users/signup

    - Login: POST /api/users/login

    - Logout: POST /api/users/logout

    - Current User: GET /api/users/current

    #Email Verification:

        - GET /api/users/verify/:verificationToken

        - POST /api/users/verify
        - github.com+1github.com+1
        - github.com+2github.com+2github.com+2

# Users

    - Update Subscription: PATCH /api/users/subscription

    - Upload Avatar: PATCH /api/users/avatars
    - github.com+2github.com+2github.com+2

# Contacts

    Get All Contacts: GET /api/contacts

    Get Contact by ID: GET /api/contacts/:contactId

    Add New Contact: POST /api/contacts

    Update Contact: PUT /api/contacts/:contactId

    Update Favorite Status: PATCH /api/contacts/:contactId/favorite

    Delete Contact: DELETE /api/contacts/:contactId
    github.com+1github.com+1

## 🧪 Testing

Use tools like Postman or Insomnia to test the API endpoints. Ensure to include the JWT token in the Authorization header for protected routes.
## 🧹 Linting

    Check for linting errors:

  npm run lint

    Automatically fix linting errors:

  npm run lint:fix

## 📸 Avatar Upload

Users can upload avatar images, which are processed and stored in the public/avatars directory. The application uses Multer for handling file uploads and Jimp for image processing.

This project is licensed under the MIT License.
## 🙋‍♀️ Author

Mariia Hutsul

    GitHub: @MariiaHutsul25

