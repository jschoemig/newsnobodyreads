import React from 'react';
import NewsList from './NewsList';
import Navbar   from './Navbar';
import Footer   from './Footer'

// import './App.css';
// import Navbar from './Navbar';
// 

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
