const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const restaurantRouter = require('./restaurant.router');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/restaurants', restaurantRouter);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello From Server Side :)' });
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
