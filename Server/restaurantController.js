const Restaurant = require('./restaurant');
const RestaurantCtrl = {}

RestaurantCtrl.getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
    console.log("get request")
  } catch (err) {
    next(err);
  }
};

RestaurantCtrl.getRestaurantById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const restaurant = await Restaurant.findByPk(id);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).send('Restaurant not found');
    }
  } catch (err) {
    next(err);
  }
};

RestaurantCtrl.createRestaurant = async (req, res, next) => {
  const restaurantData = req.body;
  try {
    const restaurant = await Restaurant.create(restaurantData);
    res.status(201).json(restaurant);
  } catch (err) {
    next(err);
  }
};

RestaurantCtrl.updateRestaurant = async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const [numRowsUpdated, updatedRestaurants] = await Restaurant.update(updates, {
      where: {
        id: id
      },
      returning: true
    });
    if (numRowsUpdated === 0) {
      res.status(404).send('Restaurant not found');
    } else {
      res.json(updatedRestaurants[0]);
    }
  } catch (err) {
    next(err);
  }
};

RestaurantCtrl.deleteRestaurant = async (req, res, next) => {
  const id = req.params.id;
  try {
    const numRowsDeleted = await Restaurant.destroy({
      where: {
        id: id
      }
    });
    if (numRowsDeleted === 0) {
      res.status(404).send('Restaurant not found');
    } else {
      res.status(204).send();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = RestaurantCtrl