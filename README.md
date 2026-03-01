# :rainbow: Title
# :memo: E-Blogs - Full-Stack Blogging Platform

---

## :compass: Overview
**E-Blogs** is a full-stack blogging web application where users can create accounts, publish blogs with images, and engage through comments.

It is built with a classic server-rendered stack using **Node.js + Express + EJS + MongoDB**, with image hosting handled by **Cloudinary** and authentication managed through **JWT stored in cookies**.

This project demonstrates practical backend engineering concepts such as:
- Secure password hashing with `bcrypt`
- File uploads using `multer`
- Cloud media handling with `cloudinary`
- Route-level user context via middleware
- MongoDB relational patterns using `ObjectId` references and `populate()`

---

## :sparkles: Features
- :bust_in_silhouette: User signup/login/logout flow
- :lock: Password hashing (`bcrypt`) and JWT-based session handling
- :framed_picture: Profile image upload during signup
- :writing_hand: Create blog posts with image + title + content
- :newspaper: Home feed with all blog cards
- :book: Blog detail page with full content view
- :speech_balloon: Comment system per blog post
- :wastebasket: Comment deletion (owner-only from UI)
- :cloud: Cloudinary integration for media storage
- :art: Responsive UI using Bootstrap 5 + EJS templates

---

## :hammer_and_wrench: Tech Stack
### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (`jsonwebtoken`)**
- **bcrypt**
- **multer**
- **cookie-parser**
- **dotenv**

### Frontend
- **EJS (Server-Side Rendering)**
- **Bootstrap 5.3**

### Media & Deployment
- **Cloudinary** (image hosting)
- **Render** (deployment)

---

## :gear: Setup
### 1. Clone the repository
```bash
git clone <your-repo-url>
cd e-blog/E-Blogs
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file in `E-Blogs/`
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

### 4. Run the app
```bash
npm start
```

### 5. Open in browser
```text
http://localhost:5000
```

---

## :globe_with_meridians: Live Link
:link: **Production URL:** https://e-blogs-ji3y.onrender.com

---

## :building_construction: Project Structure
```text
E-Blogs/
|-- index.js
|-- routes/
|   |-- auth.js
|   |-- blog.js
|-- modals/
|   |-- User.modal.js
|   |-- Blog.modal.js
|   |-- Comment.modal.js
|-- middleware/
|   |-- checkAuth.js
|-- services/
|   |-- token.js
|   |-- cloudinary.config.js
|   |-- cloudinary_upload.js
|-- views/
|   |-- partials/
|   |-- home.ejs
|   |-- blog.ejs
|   |-- addBlog.ejs
|   |-- login.ejs
|   |-- signup.ejs
|-- package.json
```

---

## :mag: API / Route Highlights
### Auth Routes
- `GET /auth/signup` - Signup page
- `POST /auth/signup` - Register user + upload profile image
- `GET /auth/login` - Login page
- `POST /auth/login` - Authenticate user
- `GET /auth/logout` - Logout user

### Blog Routes
- `GET /` - Home page with all blogs
- `GET /blog/add` - Add blog page
- `POST /blog/add` - Create a new blog
- `GET /blog/:id` - Blog detail page
- `POST /blog/comment/:blogid` - Add comment to blog
- `GET /blog/comment/delete/:id?blogid=<id>` - Delete comment

---

## :briefcase: Recruiter Notes
This project reflects hands-on experience with:
- Designing a complete CRUD-style web product workflow
- Building auth-protected user journeys
- Managing third-party media infrastructure (Cloudinary)
- Structuring modular Express apps with reusable middleware
- Integrating database relations for social features (users, blogs, comments)

---

## :rocket: Future Improvements
- Move JWT secret to environment variables (currently hardcoded in code)
- Add authorization checks at route/controller level for delete actions
- Add pagination and search for blog feeds
- Add input validation and centralized error handling
- Add tests (unit + integration)

---

## :technologist: Author
**Krish**  
Built as a practical MERN/Node full-stack portfolio project.
