import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './CardCollection.css';
import RestaurantService from '../../services/restaurant-service'
import Restaurant from '../../models/Restaurant';


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
      <Card
        key={1}
        name="Test Restaurant"
        image="https://via.placeholder.com/300"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        address="123 Main St"
        city="New York"
        country="USA"
        latitude={40.7128}
        longitude={-74.006}
        phone="+1-212-555-1234"
        website="https://www.testrestaurant.com/"
        price="$$"
        />


    </div>
  );
};

export default CardCollection;
