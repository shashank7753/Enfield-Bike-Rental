// const express = require('express');
// const bodyParser = require('body-parser');
// const sequelize = require('./config/database'); 
// const userRoutes = require('./routes/userRoutes'); 
// const rideHistoryRoutes = require('./routes/rideHistoryRoutes'); 

// const app = express(); // Initialize Express app

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
// app.use('/api/users', userRoutes); // User-related routes
// app.use('/api/history', rideHistoryRoutes); // Ride history-related routes

// // Connect to the database
// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected successfully'))
//   .catch((err) => console.error('Unable to connect to the database:', err));

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
