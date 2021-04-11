import Link from 'next/link';

const tomato = () => {
  return (
    <div>
      <h2>tomato page</h2>
      <Link href='/'>
        <a>Move to '/'</a>
      </Link>
    </div>
  )
}

export default tomato;
