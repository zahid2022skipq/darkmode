import { useState } from 'react';
import './App.css';

function App() {
  const [isDark, setDark] = useState(false)
  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <button onClick={() => setDark(true)} className='btn-dark' >Dark</button>
      <button onClick={() => setDark(false)} className='btn-light'>Ligh</button>
    </div>
  );
}

export default App;
