/* eslint-disable no-unused-vars */
import React from 'react';

const TopContentPage = () => {
  return (
    <div className="top-content-page">
      <section className="floating-section">
        <h2>Top Reviews</h2>
        <p> 1984 is a haunting tale of surveillance and control.</p>
        <p>The Great Gatsby is a timeless story of the American dream gone wrong.</p>
      </section>
      <section className="floating-section">
        <h2>Top Books</h2>
        <ul>
          <li>The Great Gatsby</li>
          <li>1984</li>
          <li>To Kill a Mockingbird</li>
        </ul>
      </section>
      <section className="floating-section">
        <h2>Top Comments</h2>
        <p>An unforgettable reading experience.</p>
        <p>A must-read for everyone.</p>
      </section>
    </div>
  );
};

export default TopContentPage;
