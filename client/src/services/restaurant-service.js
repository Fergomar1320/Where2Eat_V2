/*
Restaurant service. The restaurant controller is contacted through here.
*/

import axios from 'axios';

class RestaurantService {
  urlApi = 'http://localhost:3001/api/restaurants';

  getRestaurants() {
    return axios.get(this.urlApi)
  }

  getRestaurantsById(id) {
    return axios.get(`${this.urlApi}/${id}`);
  }

  postRestaurant(restaurant) {
    return axios.post(this.urlApi, restaurant);
  }

  putRestaurant(restaurant) {
    return axios.put(`${this.urlApi}/${restaurant.id}`, restaurant);
  }

  deleteRestaurant(id) {
    return axios.delete(`${this.urlApi}/${id}`);
  }
}

export default new RestaurantService();
