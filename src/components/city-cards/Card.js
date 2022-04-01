import React from 'react';
import './city-cards';

export default function Card(props) {
  const { id, url, cityName } = props.dataArr;

  return (
    <div className="city-card">
      <img className="card-image" key={id} src={url} alt={cityName} />
      <span>{cityName}</span>
    </div>
  );
}
