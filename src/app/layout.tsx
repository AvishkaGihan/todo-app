// src/app/layout.tsx
import React from "react";
import "../styles/globals.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>To-Do List App</title>
        <meta
          name="description"
          content="A simple To-Do List application built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">To-Do List</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-2 absolute bottom-0 w-full">
          <p>
            &copy; {new Date().getFullYear()} Avishka Gihan. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
