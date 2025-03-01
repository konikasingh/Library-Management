# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Online Library System
This project is an Online Library System created using React with Vite as the build tool. The system allows users to browse books, view book details, and add new books to the library.

Features
Home Page:

Displays a welcome message and a list of book categories (e.g., Fiction, Non-Fiction, Sci-Fi).
Shows a list of popular books with a link to view more details.
Navigation bar with links to Home, Browse Books, and Add Book.
Browse Books Page:

Lists books filtered by category.
Dynamic routing for books by category (e.g., /books/:category).
Includes a "View Details" link that routes to the Book Details page.
Search bar to filter books by title or author.
Book Details Page:

Displays detailed information about the selected book, including the title, author, description, and rating.
A "Back to Browse" button/link to return to the Browse Books page.
Add Book Page:

A form to add new books to the library.
Uses Redux to manage the book list state.
Redirects the user to the Browse Books page with the newly added book displayed after submission.
Form validation to ensure all fields are filled out correctly.
404 Page:

A "Page Not Found" route for undefined routes.
Includes a link to return to the Home page.

Installation

Clone the repository:
git clone https://github.com/Kuldeepkant26/Literary-Lounge.git

Navigate to the project directory:
cd librarySystem

Install the dependencies:
npm install

npm run dev