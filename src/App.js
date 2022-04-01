import React from 'react';
import Header from './components/Header';
import Hero from './components/pages/HeroPage';
import SecondPage from './components/pages/SecondPage';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SecondPage />
    </div>
  );
}
