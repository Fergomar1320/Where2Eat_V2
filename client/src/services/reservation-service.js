import axios from 'axios';

class ReservationService {
  urlApi = 'http://localhost:3000/api/reservations';

  // Get all reservations of a specific user
  static async getAllReservationsByUser(userId) {
    const response = await axios.get(`${this.urlApi}/user/${userId}`);
    return response.data;
  }

  // Create new reservation
  static async makeReservation(name, itemId, time) {
    const newReservation = {
      username: name,
      restaurant_id: itemId,
      starting_time: time,
    };
    console.log(newReservation);
    const response = await axios.post(this.urlApi, newReservation);
    console.log(response.data);
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
