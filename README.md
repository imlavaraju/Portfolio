# [Portfolio Website](https://portfolio-xi-ebon-30.vercel.app/)

This is a personal portfolio website built with React.js, React Router, and various other libraries. It showcases my projects, education, skills, and provides contact options.

## Table of Contents
- [Portfolio Website](#portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
  - [Routes](#routes)
  - [Backend Setup](#backend-setup)
  - [Scripts](#scripts)
  - [License](#license)

## Features

- **Home Page**: Overview of about me, projects, skills, education, contact, and footer.
- **Projects Page**: List of projects with GitHub and live links.
- **Education Page**: Display of educational background.
- **Contact Page**: Contact form with validation and submission.
- **Likes**: Like button functionality to show appreciation.
- **Responsive Design**: Mobile-friendly navigation and layout.

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the React App**
   ```sh
   npm start
   ```

4. **Setup JSON Server for Likes**
   - Install JSON Server globally:
     ```sh
     npm install -g json-server
     ```
   - Create a `db.json` file in the root directory with the following content:
     ```json
     {
       "likes": []
     }
     ```
   - Start the JSON Server:
     ```sh
     json-server --watch db.json --port 3000
     ```

## Usage

1. **Run the React Application**
   ```sh
   npm start
   ```
   This will start the application on `http://localhost:3000`.

2. **Navigate the Application**
   - **Home Page**: Overview of about me, projects, skills, education, and contact.
   - **Projects Page**: Detailed view of all projects.
   - **Education Page**: Educational background.
   - **Contact Page**: Contact form to reach out.

## Components

### `App.js`
- The main component that sets up the routes and includes the `Navbar`.

### `Home.js`
- The home page component that includes sections for about, projects, skills, education, contact, and footer.

### `About.js`
- Component displaying about me section with typing animation.

### `Projects.js`
- Component for displaying a list of projects. Fetches data from a local JSON file.

### `Education.js`
- Component displaying educational background.

### `Contact.js`
- Component for the contact form with validation and submission functionality using Web3Forms.

### `Skills.js`
- Component displaying skills with an option to show text or icons.

### `Like.js`
- Component for the like button and form submission to JSON server.

### `Navbar.js`
- Component for the navigation bar with toggle menu for mobile view.

### `Footer.js`
- Component for the footer.

## Routes

- **`/`**: Home Page
- **`/projects`**: Projects Page
- **`/education`**: Education Page
- **`/contact`**: Contact Page



