import { useState } from 'react';
import Link from 'next/link';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      username
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default App;
