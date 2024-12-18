const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection - Use MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://shashank33379:SMIs5EbnHaN5Wcau@enfield1.ufmik.mongodb.net/';

// Connect to MongoDB Atlas
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
  
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
