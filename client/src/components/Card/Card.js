import React from 'react';
import './Card.css';

const Card = ({ name, image, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-overlay"></div>
    </div>
  );
};


export default Card;
