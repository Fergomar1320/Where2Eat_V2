const express = require('express');
const router = express.Router();
const RestaurantCtrl = require('../Controllers/restaurantController');

// GET all restaurants
router.get('/', RestaurantCtrl.getAllRestaurants);

// GET a restaurant by ID
router.get('/:id', RestaurantCtrl.getRestaurantById);

// POST new restaurant
router.post('/', RestaurantCtrl.createRestaurant);

// PUT an existing restaurant by ID
router.put('/:id', RestaurantCtrl.updateRestaurant);

// DELETE restaurant by ID
router.delete('/:id', RestaurantCtrl.deleteRestaurant);

module.exports = router;
