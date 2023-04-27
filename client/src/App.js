import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import CardCollection from './components/CardCollection/CardCollection';


const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/restaurants');
        setRestaurants(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <Header></Header>
      <h1>{restaurants[0]}</h1>
      <CardCollection restaurants={restaurants} />
    </div>
  );
};

export default RestaurantList;
