'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{ padding: '10px', cursor: 'pointer' }}>
        Try Again
      </button>
    </div>
  );
}
