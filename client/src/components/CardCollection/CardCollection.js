import React from 'react';
import Card from '../Card/Card';
import './CardCollection.css';


const CardCollection = ({ restaurants }) => {
  return (
    <div className="card-collection">
      {restaurants.map((restaurant) => (
        <Card
          id={restaurant.id}
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
