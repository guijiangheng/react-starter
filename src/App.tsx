import './App.css';

import { useCallback, useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  const addCount = useCallback(() => {
    setCount((n) => n + 1);
  }, []);

  return (
    <div className="App">
      <div>{count}</div>
      <button type="button" onClick={addCount}>
        +1
      </button>
    </div>
  );
}

export default App;
