import './App.css';

import { useState } from 'react';

import Counter from './components/Counter/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
    </>
  )
}

export default App
