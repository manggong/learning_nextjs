import React, { useState } from 'react';
import Link from 'next/link';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>searching github</p>
      <Link href={`/users/${username}`}>
        <a>{`searching ${username}`}</a>
      </Link>
    </div>
  );
};

export default App;
