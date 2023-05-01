import React from 'react';
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from '../components/Header/Header';
import CardCollection from '../components/CardCollection/CardCollection';

const RestaurantPage = () => {

  const loggedInUser = Boolean(localStorage.getItem("authenticated"));

  if (loggedInUser) {
    return (
      <div>
        <Header />
        <CardCollection />
      </div>
    );

  } else {
    return <Navigate replace to="/login" />;
  };
}


export default RestaurantPage;
