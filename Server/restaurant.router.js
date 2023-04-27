const express = require('express');
const router = express.Router();
const RestaurantCtrl = require('./restaurantController');

// GET all restaurants
router.get('/restaurants', RestaurantCtrl.getAllRestaurants);

// GET a restaurant by ID
router.get('/restaurants/:id', RestaurantCtrl.getRestaurantById);

// POST a new restaurant
router.post('/restaurants', RestaurantCtrl.createRestaurant);

// PUT/UPDATE an existing restaurant by ID
router.put('/restaurants/:id', RestaurantCtrl.updateRestaurant);

// DELETE a restaurant by ID
router.delete('/restaurants/:id', RestaurantCtrl.deleteRestaurant);

module.exports = router;
