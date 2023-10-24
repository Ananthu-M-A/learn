import {useState} from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

  return (
    <div className="container-fluid text-center p-5">
      <button className="btn border rounded-3 text-light bg-dark" onClick = {plus}> + </button>
      <Counter count = {count} />
      <button className="btn border rounded-3 text-light bg-dark" onClick = {minus}> - </button>
    </div>
  );
}

export default App;
