import './App.css'

import Movies from './Components/Movies'
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div>    
        <Movies/>
        <button
        className="bg-slate-600 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded fixed bottom-0 right-0 mb-3 mr-3"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Claro' : 'Oscuro'}
      </button>
      </div>
      
    </>
  )
}

export default App
