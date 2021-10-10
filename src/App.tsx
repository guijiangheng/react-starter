import { useCallback, useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const addCount = useCallback(() => {
    setCount((n) => n + 1);
  }, []);

  return (
    <div className="flex h-screen  bg-gray-100 justify-center items-center">
      <div>{count}</div>
      <button type="button" onClick={addCount}>
        +1
      </button>
    </div>
  );
}

export default App;
