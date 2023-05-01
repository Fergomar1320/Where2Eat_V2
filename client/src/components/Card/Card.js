import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReservationService from '../../services/reservation-service';
import './Card.css';

const Card = ({ restaurantId, name, image, price, address, city, country, latitude, longitude, phone, website }) => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  
  const handleReservationClick = () => {
    setShowReservation(!showReservation);
  };

  /*
  Same as header. Renders the reservation time buttons. Only that, in this case, the reservation
  is created instead of updated.
  */
  const renderReservationTimes = () => {
    const times = [];
    for (let i = 0; i <= 540; i += 10) {
      const hour = Math.floor(i / 60);
      const minute = i % 60;
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      times.push(
        <button class="time-button"key={i} onClick={() => handleReservation(time)}>{time}</button>
      );
    }
    return times;
  };

  /*
  Here is where it's actually created.
  */
  const handleReservation = (time) => {
    console.log(time);
    ReservationService.makeReservation(username, restaurantId, time);
    alert("Reservation done!")
    setShowReservation(false);
  };

  /*
  Created to work well with CardCollection. Renders a card per each item in restaurant.
  */
  return (
    <><div className="card" onClick={() => setIsExpanded(true)}>
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
            <div className="reservation-container">
              <br></br>
              {showReservation ? renderReservationTimes() : <button class= "reservation-button"onClick={handleReservationClick}>Make a reservation</button>}
            </div>
          </div>
        </div>
      )}
      <div className="card-overlay"></div>
    </div>
    {isExpanded && (
        <button className="card-popup-close" onClick={() => setIsExpanded(false)}>X</button>
      )}
    </>
  );
};

export default Card;
