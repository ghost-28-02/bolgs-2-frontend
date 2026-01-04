# Blogs-2 Frontend

A modern, responsive blog application built with React, featuring a clean UI with Tailwind CSS and smooth navigation powered by React Router.

## 🌟 Features

- **Dynamic Blog Posts**: Browse and read blog posts with pagination support
- **Category Filtering**: Filter posts by categories
- **Tag-based Navigation**: Browse posts by tags
- **Related Blog Suggestions**: View related posts based on blog content
- **Responsive Design**: Beautiful UI powered by Tailwind CSS with backdrop blur effects
- **Loading States**: Smooth loading animations with custom spinner
- **Modern Stack**: Built with React 19 and latest web technologies

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 7. 9.5
- **Styling**: Tailwind CSS 3.4.17
- **Build Tool**: React Scripts 5.0.1
- **Testing**: React Testing Library & Jest

## 📁 Project Structure

```
bolgs-2-frontend/
├── public/               # Static assets
├── src/
│   ├── Pages/           # Page components
│   │   ├── Home.js
│   │   ├── BlogPage.js
│   │   ├── CategoryPage.js
│   │   └── TagPage.js
│   ├── components/      # Reusable components
│   │   ├── Header.js
│   │   ├── PostCard.js
│   │   ├── Spinner.js
│   │   ├── Blogs.js
│   │   └── Pagination.js
│   ├── context/         # Context API
│   │   └── IndexContext.js
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── . env                 # Environment variables
├── package.json
└── tailwind.config.js
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghost-28-02/bolgs-2-frontend.git
   cd bolgs-2-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with the following: 
   ```env
   REACT_APP_API_URL=your_primary_api_url
   REACT_APP_API_URL_SECOND=your_secondary_api_url
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Key Components

### Pages
- **Home**: Landing page displaying all blog posts
- **BlogPage**:  Individual blog post view with related posts
- **CategoryPage**:  Filtered view of posts by category
- **TagPage**: Filtered view of posts by tag

### Components
- **Header**: Navigation header with branding
- **PostCard**:  Reusable card component for displaying blog posts
- **Spinner**:  Custom loading spinner with animation
- **Pagination**: Navigate between pages of blog posts
- **Blogs**: Container component for displaying multiple posts

## 🔌 API Integration

The app fetches blog data from external APIs configured through environment variables:
- Primary API (`REACT_APP_API_URL`) - For fetching blog posts
- Secondary API (`REACT_APP_API_URL_SECOND`) - For fetching individual blog details and related posts

## 🧪 Testing

Run tests with: 
```bash
npm test
```

Tests are configured with: 
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event

## 🎯 Routes

- `/` - Home page with all blog posts
- `/blog/:blogId` - Individual blog post page
- `/tags/: tag` - Posts filtered by specific tag
- `/categories/:category` - Posts filtered by specific category

## 🎨 Styling

The project uses Tailwind CSS with custom configurations: 
- Modern gradient effects
- Backdrop blur for glassmorphism effects
- Responsive design breakpoints
- Custom loading spinner animation

## 📦 Browser Support

Production builds support:
- >0.2% market share
- Not dead browsers
- Not Opera Mini

Development mode supports:
- Latest Chrome
- Latest Firefox
- Latest Safari

## 📝 License

This project is private and not currently licensed for public use.

## 👤 Author

**ghost-28-02**

## 🤝 Contributing

This is a private repository.  Please contact the owner for contribution guidelines.

---

Built with ❤️ using React and Tailwind CSS
```
