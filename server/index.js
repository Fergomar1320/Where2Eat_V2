/*
Calls database, declares router middlewares, syncs with db, starts listening.
*/

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/restaurants', require('./routers/restaurant.router'));
app.use('/api/users', require('./routers/user.router'));
app.use('/api/reservations', require('./routers/reservation.router'));

(async () => {
  try {
    await sequelize.sync();
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Unable to create tables', error);
  }
})();

sequelize.authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
      console.log('Database connected.');
    });
    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
