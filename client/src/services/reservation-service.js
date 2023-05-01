/*
User service. The user controller is contacted through here.
*/

import axios from 'axios';

class ReservationService {
  static urlApi = 'http://localhost:3001/api/reservations';

  // Get all reservations of a specific user
  static async getAllReservationsByUsername(username) {
    const response = await axios.get(`${this.urlApi}/user/${username}`);
    return response.data;
  }

  // Special post, where the object is created inside the call
  static async makeReservation(name, itemId, time) {
    const newReservation = {
      username: name,
      restaurant_id: itemId,
      starting_time: time,
    };
    const response = await axios.post(this.urlApi, newReservation);
    return response.data;
  }
  
  // Get a specific reservation by id
  static async getReservationById(reservationId) {
    const response = await axios.get(`${this.urlApi}/${reservationId}`);
    return response.data;
  }

  // Update reservation by id
  static async updateReservationById(reservationId, updatedReservation) {
    const response = await axios.put(`${this.urlApi}/${reservationId}`, updatedReservation);
    return response.data;
  }

  // Delete reservation by id
  static async deleteReservationById(reservationId) {
    const response = await axios.delete(`${this.urlApi}/${reservationId}`);
    return response.data;
  }
}

export default ReservationService;
