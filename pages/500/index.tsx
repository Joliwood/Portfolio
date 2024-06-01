import React from 'react';
import Link from 'next/link';

const Custom500 = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        Go back to Home
      </Link>
    </div>
  );
};

export default Custom500;
