import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './CardCollection.css';
import RestaurantService from '../../services/restaurant-service'


const CardCollection = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
      RestaurantService.getRestaurants()
        .then(response => setRestaurants(response.data))
        .catch(error => console.log(error));
    }, []);
  

  return (
    <div className="card-collection">
      {restaurants.map((restaurant) => (
        <Card
          restaurantId={restaurant.id}
          name={restaurant.name}
          image={restaurant.image}
          description={restaurant.description}
          address={restaurant.address}
          city={restaurant.city}
          country={restaurant.country}
          latitude={restaurant.latitude}
          longitude={restaurant.longitude}
          phone={restaurant.phone}
          website={restaurant.website}
          price={restaurant.price}
        />
      ))}

    </div>
  );
};

export default CardCollection;
