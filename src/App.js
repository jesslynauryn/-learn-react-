import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

// es6 feature spread_in_object_literals
export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item} //here
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
