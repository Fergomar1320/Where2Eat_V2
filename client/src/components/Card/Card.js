import React, { useState } from 'react';
import './Card.css';

const Card = ({ name, image, price, address, city, country, latitude, longitude, phone, website }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-price">{price}</p>
      </div>
      {isExpanded && (
        <div className="card-popup">
          <div className="card-popup-image">
            <img src={image} alt={name} />
          </div>
          <div className="card-popup-details">
            <h2 className="card-popup-title">{name}</h2>
            <p className="card-popup-address">{address}</p>
            <p className="card-popup-city">{city}</p>
            <p className="card-popup-country">{country}</p>
            <p className="card-popup-latitude">{latitude}</p>
            <p className="card-popup-longitude">{longitude}</p>
            <p className="card-popup-phone">{phone}</p>
            <p className="card-popup-website">{website}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
