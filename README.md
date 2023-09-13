# Bookstore | Blazesoft interview

## Preview

https://blazesoft-interview.vercel.app/

## Description

### Task

This test assignment for a Frontend Developer position at Blazesoft involves using React to develop a single-page
bookstore application with the following features:

1. The main page should display a list of books, each with details (name, description, price and category), and a delete
   button. An "add" button should be present at the top for users to add new books.
2. Clicking the "add" button should open a popup/page allowing the user to input book details. After submission, the
   book should be added to the main page.
3. Books in the list should be clickable, and clicking on a book should open a popup/page for modifying the book's
   details. After modification, the book details should be updated on the main page.
4. Clicking the delete button should remove the book from the main page.

### Key Requirements:

1. Use Redux and React Hooks.
2. Use SSR, frameworks are allowed.
3. No backend is required, an array to store the book list is OK.

### Bonus:

1. Use TypeScript.
2. Deploy the application to a public domain.

## Solution

### Tech Stack

- React and Next.js (13, app page)
- Redux, Redux Toolkit
- TypeScript
- Tailwind CSS
- react-hook-form

### How to run

```shell
git clone https://github.com/aleveha/blazesoft-interview.git
cd blazesoft-interview
```

#### Local

```shell
yarn install
yarn dev
```

#### Docker

```shell
docker compose up -d
```

Applicaton will be available at http://localhost:3000
