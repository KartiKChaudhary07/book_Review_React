/* eslint-disable no-unused-vars */
import React from 'react';
import BookCard from './BookCard';

const books = [
  { id: 1, title: 'The Great Gatsby', image: 'https://example.com/gatsby.jpg', readers: 520 },
  { id: 2, title: '1984', image: 'https://example.com/1984.jpg', readers: 780 },
  { id: 3, title: 'To Kill a Mockingbird', image: 'https://example.com/mockingbird.jpg', readers: 430 },
  { id: 4, title: 'Moby Dick', image: 'https://example.com/moby.jpg', readers: 610 },
  { id: 5, title: 'War and Peace', image: 'https://example.com/war.jpg', readers: 920 },
  { id: 6, title: 'The Odyssey', image: 'https://example.com/odyssey.jpg', readers: 300 },
  { id: 7, title: 'The Catcher in the Rye', image: 'https://example.com/catcher.jpg', readers: 700 },
  { id: 8, title: 'The Hobbit', image: 'https://example.com/hobbit.jpg', readers: 850 },
  { id: 9, title: 'Pride and Prejudice', image: 'https://example.com/pride.jpg', readers: 640 },
];

const BooksPage = () => {
  return (
    <div className="books-page">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksPage;
