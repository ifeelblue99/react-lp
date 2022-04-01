import React from 'react';
import Card from './Card';
import './city-cards';
import cityData from '../hard-data/city-card-data.js';

export default function Cards() {
  return (
    <div className="city-card-holder">
      {cityData.map((el) => {
        return <Card dataArr={el} />;
      })}
    </div>
  );
}
