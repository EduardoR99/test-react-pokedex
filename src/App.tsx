import React from 'react';
import Home from './routes/home';
import Card from './routes/Card';
import './index.css';
import { Routes, Route} from 'react-router-dom'



function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon/:name' element={<Card/>}/>
      </Routes>
      
      
    </>
  );
}

export default App;
