# 🚀 TechMaa-AI

A full-stack **consulting and IT-services website** with a modern static frontend and a modular Node.js backend for contact forms, careers, applications, newsletter subscriptions, jobs, blog posts, and administrator operations.

The repository combines three application areas:

- **Frontend** — a multi-page corporate website built with HTML, Tailwind CSS, JavaScript, and third-party UI libraries.
- **TechMaa Backend** — an Express + MongoDB API with public and protected admin routes.
- **Newsletter Backend** — a separate Express + MongoDB service dedicated to newsletter subscriptions.

---

## ✨ Highlights

### 🌐 Corporate Website

The frontend contains pages for:

- Home
- About Us
- Services
- Blog
- Testimonials
- Insights
- Careers
- Team
- Contact
- Privacy Policy
- Terms of Service
- Job application form

The UI uses a modern enterprise-style design with responsive navigation, animations, cards, testimonials, and content sections.

### 👥 Careers & Applications

The backend is structured to support:

- Public job listings
- Job applications
- Resume uploads
- Application status tracking
- Protected admin access to applications
- Application status updates

### 📝 Content Management

Authenticated administrators can:

- Create job listings
- Create blog posts
- View applications
- Update application statuses

### 📩 Contact & Newsletter

The architecture includes:

- Contact form submission
- Newsletter subscription
- MongoDB persistence
- Duplicate subscriber protection in the dedicated newsletter service

---

## 🏗️ Architecture

```text
                         TechMaa-AI
                              │
              ┌───────────────┼────────────────┐
              │               │                │
              ▼               ▼                ▼
         Frontend       TechMaa Backend   Newsletter Backend
              │               │                │
              │               ▼                ▼
              │           MongoDB          MongoDB
              │
              └──────────────┬────────────────┘
                             │
                             ▼
                    Public / Admin APIs
```

### Main backend flow

```text
Browser
   │
   ▼
Express API :4000
   │
   ├── /api/public/*
   │
   └── /api/admin/*
            │
            ▼
         JWT Auth
            │
            ▼
         MongoDB
```

### Newsletter flow

```text
Newsletter Form
      │
      ▼
Newsletter Backend
      │
      ▼
MongoDB
      │
      ▼
Unique Subscriber Record
```

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Tailwind CSS via CDN
- Font Awesome
- AOS (Animate On Scroll)
- Swiper
- Google Fonts

### TechMaa Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- NanoID
- CORS
- dotenv

### Newsletter Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## 📁 Project Structure

```text
TechMaa-AI/
│
├── frontend/
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── blog.html
│   ├── testimonials.html
│   ├── insights.html
│   ├── careers.html
│   ├── employes.html
│   ├── contact.html
│   ├── apply-form.html
│   ├── status.html
│   ├── privacy.html
│   ├── terms.html
│   └── assets/
│
├── techmaa-backend/
│   ├── controllers/
│   │   ├── admin.controller.js
│   │   └── public.controller.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── application.model.js
│   │   ├── contact.model.js
│   │   ├── job.model.js
│   │   ├── newsletter.model.js
│   │   ├── post.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── public.routes.js
│   │   └── admin.routes.js
│   │
│   ├── package.json
│   └── server.js
│
├── newsletter-backend/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── README.md
```

---

## 🌐 Frontend Pages

The frontend is a multi-page static site.

| Page | Purpose |
|---|---|
| `index.html` | Landing page |
| `about.html` | Company information |
| `services.html` | Service offerings |
| `blog.html` | Blog content |
| `insights.html` | Technology and business insights |
| `testimonials.html` | Client testimonials |
| `careers.html` | Career opportunities |
| `apply-form.html` | Job application form |
| `status.html` | Application status interface |
| `employes.html` | Team/employee page |
| `contact.html` | Contact form |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |

The frontend uses CDN-hosted libraries such as Tailwind CSS, Font Awesome, AOS, and Swiper.

---

## 🔌 TechMaa Backend API

The main API runs from:

```text
techmaa-backend/
```

The server uses:

```text
PORT = process.env.PORT || 4000
```

### Public endpoints

Base path:

```text
/api/public
```

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/public/newsletter` | Newsletter subscription |
| POST | `/api/public/contact` | Contact form submission |
| POST | `/api/public/apply` | Job application with resume upload |
| GET | `/api/public/applications/:id` | Application status |
| GET | `/api/public/jobs` | List available jobs |
| GET | `/api/public/posts` | List blog posts |

### Admin endpoints

Base path:

```text
/api/admin
```

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| POST | `/api/admin/seed` | Public | Seed initial admin user |
| POST | `/api/admin/login` | Public | Authenticate admin |
| POST | `/api/admin/jobs` | JWT | Create a job |
| POST | `/api/admin/posts` | JWT | Create a post |
| GET | `/api/admin/applications` | JWT | View applications |
| PUT | `/api/admin/applications/:id/status` | JWT | Update application status |

---

## 🗄️ Data Models

The main backend contains the following MongoDB models.

### 👤 User

Used for administrator authentication.

- Email
- Hashed password
- Created/updated timestamps

Passwords are hashed with **bcryptjs** before storage.

### 💼 Job

Stores career openings:

- Title
- Department
- Location
- Employment type
- Experience
- Salary
- Description
- Requirements
- Timestamps

Supported job types:

```text
Full-time
Part-time
Internship
Contract
```

### 📄 Application

Stores job applications:

- Application ID
- Full name
- Email
- Phone
- Job role
- Cover letter
- Resume path
- Status
- Timestamps

Supported statuses:

```text
Received
Under Review
Interviewing
Final Decision
Closed
```

### 📬 Contact

Stores:

- Name
- Email
- Company
- Message
- Timestamps

### 📰 Post

Stores blog/content posts:

- Title
- Category
- Excerpt
- Content
- Author
- Image URL
- Published date
- Timestamps

### 📧 Newsletter

Stores newsletter subscriptions:

- Email
- Subscription date

---

## 🔐 Authentication

Admin-protected routes use **JSON Web Tokens (JWT)**.

The authentication middleware:

1. Reads the `Authorization: Bearer <token>` header.
2. Verifies the token using `JWT_SECRET`.
3. Loads the corresponding user.
4. Attaches the authenticated user to the request.
5. Allows the request to continue.

Example header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📎 Resume Uploads

Job applications use **Multer** for resume uploads.

Uploaded files are served from:

```text
/uploads
```

The backend exposes that directory through Express static-file serving.

Application records store the path of the uploaded resume.

For production, configure file-type validation, size limits, secure storage, and access controls.

---

## 📰 Newsletter Backend

The separate newsletter service lives in:

```text
newsletter-backend/
```

It runs on:

```text
process.env.PORT || 3000
```

### Subscribe

```http
POST /subscribe
```

Request:

```json
{
  "email": "user@example.com"
}
```

The subscriber model enforces a unique email address.

Possible responses include:

- `201` — successfully subscribed
- `400` — email missing
- `409` — email already subscribed
- `500` — server/database error

---

## 🚀 Getting Started

### Prerequisites

Install:

- Node.js
- npm
- MongoDB
- A modern web browser

---

### 1. Clone the repository

```bash
git clone https://github.com/Harshit765G4/TechMaa-AI.git
cd TechMaa-AI
```

---

### 2. Configure the main backend

Create an environment file inside:

```text
techmaa-backend/.env
```

At minimum, configure:

```env
MONGO_URI=mongodb://127.0.0.1:27017/techmaa-ai
JWT_SECRET=replace-with-a-long-random-secret
PORT=4000
```

Then install dependencies:

```bash
cd techmaa-backend
npm install
```

Start the backend:

```bash
node server.js
```

The API runs on:

```text
http://localhost:4000
```

---

### 3. Configure the newsletter backend

Create:

```text
newsletter-backend/.env
```

Example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/techmaa-newsletter
PORT=3000
```

Install dependencies:

```bash
cd ../newsletter-backend
npm install
```

Start the service:

```bash
node server.js
```

The newsletter API runs on:

```text
http://localhost:3000
```

---

### 4. Run the frontend

The frontend is made of static HTML pages.

You can serve the `frontend/` directory using a local development server such as VS Code Live Server.

Example:

```text
frontend/index.html
```

> Some frontend pages currently call the API using hard-coded localhost URLs. When deploying, update those API URLs to the production backend addresses.

---

## 🧪 Typical Development Flow

```text
1. Start MongoDB
       │
       ▼
2. Start TechMaa backend (:4000)
       │
       ▼
3. Start newsletter backend (:3000)
       │
       ▼
4. Serve frontend
       │
       ▼
5. Test public forms and content APIs
       │
       ▼
6. Login to admin API
       │
       ▼
7. Create jobs/posts and manage applications
```

---

## ⚠️ Important Current Repository Notes

This repository is a work in progress and contains several development-oriented pieces.

### Public controller completeness

The current `techmaa-backend/controllers/public.controller.js` file contains placeholder bodies for some handlers such as:

- Newsletter subscription
- Contact submission
- Job application creation
- Application status lookup

The route definitions exist, but those handlers should be verified and completed before treating the entire public API as production-ready.

### Admin seed endpoint

The admin seed route is intentionally exposed as a public setup route and contains development credentials in the source code.

Before production deployment:

- Remove hard-coded credentials.
- Use environment variables or a secure provisioning flow.
- Disable or remove the seed endpoint after the initial administrator is created.

### Frontend API URLs

Some frontend pages currently reference localhost API addresses directly. These should be centralized into environment/configuration values for deployment.

---

## 🔐 Security Checklist

Before deploying publicly:

- Use strong, unique `JWT_SECRET` values.
- Never commit `.env` files or database credentials.
- Remove hard-coded admin credentials.
- Disable the admin seed route after initial setup.
- Restrict CORS to trusted origins.
- Add rate limiting to authentication and public form endpoints.
- Validate and sanitize all incoming form data.
- Validate resume file types and upload sizes.
- Store uploads securely.
- Protect personally identifiable application/contact data.
- Use HTTPS.
- Add centralized error handling and logging.
- Use secure production MongoDB credentials.
- Add CSRF protection where appropriate for browser-based authenticated workflows.

---

## 🔮 Future Improvements

- 🔐 Full admin dashboard UI
- 🧩 Centralized API configuration
- 📊 Application analytics
- 🔍 Search and filtering for applicants
- 📬 Automated email notifications
- 📰 Rich blog CMS
- 🖼️ Secure media management
- ☁️ Cloud deployment
- 🐳 Docker support
- 🧪 Automated tests
- 🔄 CI/CD pipeline
- 📝 API documentation with Swagger/OpenAPI
- 📈 Monitoring and structured logging

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test frontend and backend functionality.
5. Commit your changes.
6. Open a pull request.

---

## 📄 License

This repository currently does not contain a dedicated `LICENSE` file.

Add an appropriate license before distributing or reusing the project publicly.

---

## 👨‍💻 Author

**Harshit Garg**

GitHub: [@Harshit765G4](https://github.com/Harshit765G4)

Repository: [TechMaa-AI](https://github.com/Harshit765G4/TechMaa-AI)

---

⭐ If you find this project useful, consider giving it a star!
