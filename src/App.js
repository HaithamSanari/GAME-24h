import React from 'react';
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyled';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* <h1>GAME 24h</h1> */}
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/game/:id'} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
