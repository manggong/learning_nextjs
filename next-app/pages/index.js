import Link from 'next/link';

const App = () => {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <Link href='/tomato'>
        <a>Move to '/tomato</a>
      </Link>
      <hr/>
      <Link href='/vegetable/potato'>
        <a>Move to potato</a>
      </Link>
    </div>
  );
};

export default App;