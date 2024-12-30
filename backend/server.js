
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const db = require('./config/db'); // Import the Knex instance
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 6003; // Use environment variable for port

// CORS Configuration
const corsOptions = {
  origin: ' http://localhost:5173/', // Replace with your actual frontend domain
  methods: 'GET,POST',
};
app.use(cors(corsOptions)); // Apply CORS configuration to all routes

app.use(bodyParser.json());

// PostgreSQL Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require('./config/enfield-bike-rental-firebase-adminsdk-h4yws-2f3d8ef967.json')),
});

// Middleware to Verify Firebase Token
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};


// Knex Example Route
app.get('/api/motorcycles', async (req, res) => {
  try {
    const motorcycles = await db('motorcycles').select('*'); // Use Knex for this query
    res.json(motorcycles);
  } catch (error) {
    console.error('Error fetching motorcycles:', error);
    res.status(500).json({ error: 'Failed to fetch motorcycles' });
  }
});

// Other Routes using Pool
app.get('/other-route', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM some_table');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database query failed', error });
  }
});

// Get User Data
app.get('/user-data', verifyToken, async (req, res) => {
  const { uid } = req.user;

  try {
    const userResult = await pool.query('SELECT id, role FROM users WHERE firebase_uid = $1', [uid]);
    if (userResult.rows.length === 0) return res.status(404).json({ message: 'User not found' });

    const userId = userResult.rows[0].id;
    const role = userResult.rows[0].role;

    // Fetch data based on role
    if (role === 'admin') {
      const dataResult = await pool.query('SELECT * FROM user_data');
      res.json(dataResult.rows);
    } else {
      const dataResult = await pool.query('SELECT * FROM user_data WHERE user_id = $1', [userId]);
      res.json(dataResult.rows);
    }
  } catch (error) {
    console.error('Server error: ', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Add User Data
app.post('/user-data', verifyToken, async (req, res) => {
  const { uid } = req.user;
  const { data } = req.body;

  try {
    const userResult = await pool.query('SELECT id FROM users WHERE firebase_uid = $1', [uid]);
    if (userResult.rows.length === 0) return res.status(404).json({ message: 'User not found' });

    const userId = userResult.rows[0].id;

    await pool.query('INSERT INTO user_data (user_id, data) VALUES ($1, $2)', [userId, data]);
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Server error: ', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
