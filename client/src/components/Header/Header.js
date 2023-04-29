import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReservationService from '../../services/reservation-service';
import RestaurantService from '../../services/restaurant-service';

import './Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reservations, setReservations] = useState([]);
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  const handleMyReservationsClick = async () => {
    const reservations = await ReservationService.getAllReservationsByUsername(username);
    setReservations(reservations);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getRestaurants = async (reservation) => {
    const restaurant = await RestaurantService.getRestaurantsById(reservation.restaurant_id);
    return restaurant;
  }  

  return (
    <header>
      <h1 className="title">Where2Eat</h1>
      <div className="user-logo" onClick={() => setShowMenu(!showMenu)}>
        <img src="/images/user-logo.png" alt="User logo" width={40} height={40} />
      </div>
      {showMenu && (
        <div className="user-menu">
          <p>Hello, {username}</p>
          <button className="menu-item" onClick={handleMyReservationsClick}>
            My reservations
          </button>
          <button className="menu-item">Logout</button>
        </div>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>X</span>
            <h2>Reservations for {username}:</h2>
            <ul className="modal-data">
            {reservations.map(reservation => {
              getRestaurants(reservation).then(restaurant => {
                return (
                  <li classname="data"key={reservation.id}>
                    <p>hi</p>
                    {console.log(restaurant.data.name + ' ' + restaurant.data.address + ' ' + reservation.starting_time)}
                    {restaurant.data.name} - {restaurant.data.address} - {reservation.starting_time}
                  </li>
                );
              });
            })}

            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
