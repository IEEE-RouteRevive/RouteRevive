import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Map from './components/Map';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <Map className="flex-grow" />
      <Footer />
    </div>
  );
}

export default App;
