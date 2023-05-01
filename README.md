# Where2Eat_V2
College Project

# Dependencies for back-end

- express
- cors
- Sequelize (for MySQL implementation)
- mysql2 (same reason)
- bcrypt (user verification)
- jsonwebtoken (user verification)

# Use

1. Start you MySQL server

2. Add your credentials in database.js

3. Start the server using this command in /server:

    `node index.js`

4. Add some restaurant examples in order to see the functionality. Here's an example:

`{
  "name": "Example Restaurant 2",
  "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "address": "123 Main Street",
  "city": "Example City",
  "country": "Example Country",
  "latitude": 37.7749,
  "longitude": -122.4194,
  "phone": "555-555-5555",
  "website": "https://www.example.com",
  "price": "$$"
}`