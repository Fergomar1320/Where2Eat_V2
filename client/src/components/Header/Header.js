/*
Header function has many properties, which I will explain one by one.
*/

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReservationService from '../../services/reservation-service';
import RestaurantService from '../../services/restaurant-service';

import './Header.css';


/*
Gets all restaurants by reservation id.
*/
async function getRestaurants(reservation) {
  const restaurant = await RestaurantService.getRestaurantsById(reservation.restaurant_id);
  return restaurant;
}

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [showReservation, setShowReservation] = useState(false);
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');
  const navigate = useNavigate();

  const handleMyReservationsClick = () => {
    printReservations();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  /*
  Shows all the reservations a specific user has by his id.
  */
  async function printReservations() {
    const reservations = await ReservationService.getAllReservationsByUsername(username);
    const restaurantPromises = reservations.map(reservation => getRestaurants(reservation));
    const restaurants = await Promise.all(restaurantPromises);
    setReservations(reservations);
    setRestaurants(restaurants);
  }

  /*
  Shows all the available times, and updates the reservation time when clicked on one.
  */
  const renderReservationTimes = (reservation) => {
    const times = [];
    for (let i = 0; i <= 540; i += 10) {
      const hour = Math.floor(i / 60);
      const minute = i % 60;
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      times.push(
        <button className='time-btn' key={i} onClick={() => handleUpdateReservation(reservation.id, reservation, time)}>{time}</button>
      );
    }
    return times;
  };

  const handleUpdateButtonClicked = async () => {
    setShowReservation(!showReservation)
  }

  /*
  Actually updates the reservation. A reservation object is created, and the reservations
  shown on screen are updated accordingly.
  */
  const handleUpdateReservation = async (reservationId, reservation, newTime) => {
    const updatedReservation = { 
      user_id: reservation.user_id,
      restaurant_id: reservation.restaurant_id,
      starting_time: newTime };
    await ReservationService.updateReservationById(reservationId, updatedReservation);
    const reservations = await ReservationService.getAllReservationsByUsername(username);
    setReservations(reservations);
    setShowReservation(!showReservation)
  };

  /*
  Handles deletion. Same story as updating, but a window is shown to confirm the decision.
  */
  const handleDeleteReservation = async (reservationId) => {
    const confirmDelete = window.confirm("Are you sure you want to cancel your reservation?");
    if (confirmDelete) {
      await ReservationService.deleteReservationById(reservationId);
      const reservations = await ReservationService.getAllReservationsByUsername(username);
      setReservations(reservations);
      printReservations();
    }
  };

  /*
  Logs out. The authenticated item is reassigned to false.
  */
  const logOut = async () => {
    localStorage.setItem("authenticated", false);
    navigate('/login');
  }
  

  /*
  A showModal is created to toggle between showing the reservations.
  */
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
          <button className="menu-item" onClick={logOut}>Logout</button>
        </div>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>X</span>
            <h2>Reservations for {username}:</h2>
            <ul className="modal-data">
              {reservations.map((reservation, index) => (
                <li className="data" key={reservation.id}>
                  {restaurants[index].data.name} - {restaurants[index].data.address} - {reservation.starting_time}
                  {showReservation ? renderReservationTimes(reservation) : <button className='update-btn' onClick={handleUpdateButtonClicked}>Update</button>}
                  <button className="delete-btn" onClick={() => handleDeleteReservation(reservation.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );

}

export default Header;
