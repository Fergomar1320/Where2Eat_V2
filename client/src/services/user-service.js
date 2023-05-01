/*
User service. The user controller is contacted through here.
*/

import axios from 'axios';

class UserService {
    urlApi = 'http://localhost:3001/api/users';
  
    async verifyUser(username, password) {
      const response = await axios.get(`${this.urlApi}/login?username=${username}&password=${password}`);
      return response.data.token;
    }
  
    async createUser(username, password) {
      const response = await axios.post(`${this.urlApi}/register`, { username, password });
      return response.data.token;
    }

    getAuthToken() {
      return localStorage.getItem('authToken');
    }

}

export default new UserService();