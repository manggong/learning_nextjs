import { useState } from 'react';
import { useRouter } from 'next/router';

const App = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const toTomato = () => {
    router.push('/tomato');
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  const toInputName = () => {
    router.push(`/vegetable/${name}`);
  };

  return (
    <div>
      <button type='button' onClick={toTomato}>
        going to tomato
      </button>
      <p>name</p>
      <input value={name} onChange={onChange} style={{ marginRight: '12px' }} />
      <button type='button' onClick={toInputName}>
        going to inputValue
      </button>
    </div>
  );
};

export default App;
