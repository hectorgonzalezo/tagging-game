import React from 'react';
import './styles/appStyle.css';
import MainImage from './components/MainImage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainImage />
      <Footer projectName='wheres-waldo'/>
    </div>
  );
}

export default App;
