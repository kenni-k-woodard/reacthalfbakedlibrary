import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <h1>Welcome to the Library!</h1>
      <p>
        Check out our <Link to="/books">books</Link>
      </p>
    </>
  );
}
