# BookVerse 📚

A React-based web application that allows users to search, explore, and preview books using the Google Books API. Built with Tailwind CSS for styling and Axios for API calls, BookVerse provides a seamless and engaging experience for book enthusiasts.

---

## Features

- **Search Books**: Find books by their title, author, or keywords.
- **Book Details**: View detailed information about a selected book.
- **Preview Books**: Open a preview of the book in a new tab.
- **Caching with LocalStorage**: Optimized API calls by caching responses locally.
- **Global State Management**: Uses React Context for managing global states and API interactions.

---

## Tech Stack

- **React (ES7)**: Frontend framework.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For handling API calls.
- **Google Books API**: Source of book data.

---

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/RakinduM/Books-Verse.git

2.  Navigate to the project directory:

        cd Book-Verse

3. Install the dependencies

        npm i

4. Add your google book api to env file. See env.example file

### Running Locally

Once the dependencies are installed, you can run the application locally using:

     npx run dev

## API Limitations

Google Books API has daily usage limits. If you encounter a quota exceeded error:

- Ensure you are not exceeding the request limits.
- Cache responses locally to minimize redundant API calls.

## Learn More

To learn more about the project, look at the following resources:

- [Google Books API](https://developers.google.com/books)
- [React Documentation](https://react.dev/)
- [Tailwind Documentation](https://tailwindcss.com/docs/installation)
- [DaisyUI Documentation](https://daisyui.com/docs/install/)
- [Framer Motion](https://motion.dev/docs)