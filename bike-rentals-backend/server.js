// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection - Use MongoDB Atlas connection string
// const mongoURI = 'mongodb+srv://shashank33379:SMIs5EbnHaN5Wcau@enfield1.ufmik.mongodb.net/';

// // Connect to MongoDB Atlas
// mongoose.connect(mongoURI)
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch((error) => console.error('Error connecting to MongoDB:', error));

// // Motorcycle schema and model
// const motorcycleSchema = new mongoose.Schema({
//   name: String,
//   type: String,
//   cc: Number,
//   price: Number,
//   description: String,
//   image: String,
//   rating: Number,
// });

// const Motorcycle = mongoose.model('Motorcycle', motorcycleSchema);

// // POST route to add a motorcycle
// app.post('/api/motorcycles', async (req, res) => {
//     try {
//       const newMotorcycle = new Motorcycle(req.body);
//       await newMotorcycle.save();
//       res.status(201).json({ message: 'Motorcycle added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to add motorcycle' });
//     }
//   });
  
// // Start server
// app.get('/', (req, res) => {
//     res.send('Server is up and running');
//   });
  
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your_stripe_secret_key'); // Replace with your Stripe secret key

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection - Use MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://shashank33379:SMIs5EbnHaN5Wcau@enfield1.ufmik.mongodb.net/';

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Motorcycle schema and model
const motorcycleSchema = new mongoose.Schema({
  name: String,
  type: String,
  cc: Number,
  price: Number,
  description: String,
  image: String,
  rating: Number,
});

const Motorcycle = mongoose.model('Motorcycle', motorcycleSchema);

// POST route to add a motorcycle
app.post('/api/motorcycles', async (req, res) => {
  try {
    const newMotorcycle = new Motorcycle(req.body);
    await newMotorcycle.save();
    res.status(201).json({ message: 'Motorcycle added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add motorcycle' });
  }
});

// POST route to handle Stripe payments
app.post('/api/payment', async (req, res) => {
  try {
    const { amount, token } = req.body;

    // Create the charge with Stripe
    const charge = await stripe.charges.create({
      amount: amount * 100, // Stripe expects the amount in cents
      currency: 'inr', // You can adjust the currency
      source: token.id, // Token from frontend
      description: 'Motorcycle Rental Payment',
    });

    res.status(200).json({ success: true, message: 'Payment successful', charge });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ success: false, message: 'Payment failed' });
  }
});

// Start server
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
