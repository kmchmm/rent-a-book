import React from 'react'
import MyRouter from './router/index.js';

import Navbar from './components/Navbar.js';
import Footer from './pages/Footer.js';



function App() {
  return (
    <div style={{}}>
      
      <Navbar />
      <MyRouter />
      <Footer />
    </div>
  );
}

export default App;
