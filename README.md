# MERN Authentication Project

## Overview
This is a starter application for building a MERN stack Single Page Application (SPA) with user authentication. It integrates **Vite** as the build tool for faster front-end development and supports secure, token-based workflows. 

---

## Features

### Backend
- **Express & MongoDB API**:
  - Routes for authentication, user logout, registration, viewing profiles, and updating profiles.
- **JWT Authentication**:
  - Tokens stored in secure HTTP-only cookies.
  - Middleware for validating tokens and protected routes.
- **Error Middleware**:
  - Custom error handling for smoother debugging and production readiness.

### Frontend
- **React SPA**:
  - Built using Vite for efficient development.
  - Includes pages for registration, login, viewing/updating profiles, and logging out.
- **UI Enhancements**:
  - Styled with **React Bootstrap** for a clean and responsive interface.
  - **React Toastify** for elegant notifications.

### General Workflow
- Single Page Application with an intuitive user experience.
- Supports protected routes, ensuring access only to authenticated users.

---

## Technologies Used

### Front-End
- **React.js**: For dynamic, component-driven UI.
- **React Router**: For seamless SPA navigation.
- **Redux Toolkit**: For managing global state effectively.
- **Axios**: For handling API requests.
- **React Bootstrap**: For responsive and modern styling.
- **React Toastify**: For interactive notifications.
- **Vite**: For faster builds and optimized development.

### Back-End
- **Node.js**: For handling server-side logic.
- **Express.js**: For creating APIs.
- **MongoDB**: For storing user and application data.
- **Mongoose**: For schema-based database modeling.

### Authentication
- **JWT (JSON Web Tokens)**: For session management and secure authentication.
- **bcrypt.js**: For hashing and securing user passwords.

---

## Environment Variables

To configure the application, create the `.env` and add the following keys:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```
---

## Installation and Setup

### Steps
```
1. Clone the repository:
   ```bash
   git clone https://github.com/sandarudivyantha/mern_auth_project.git
   cd mern_auth_project

2. Install dependencies:
   ```bash
   npm install
   cd frontend
   npm install

3. Start the application:
    ### Run frontend (:3000) & backend (:5000) concurrently
   ```bash
    npm run dev
```

## Screenshots
![1 1 1](https://github.com/user-attachments/assets/63e3214c-18dd-4ee0-8da4-31d434382291)
![1 1](https://github.com/user-attachments/assets/64dec5ce-6d79-40b9-8e04-92af7faa7973)
![2](https://github.com/user-attachments/assets/76bc5ef1-9832-456c-b4b6-0bfa67b93549)
![3](https://github.com/user-attachments/assets/f6f9bc9b-02a6-48a5-a3fb-49d3ef8e2074)
