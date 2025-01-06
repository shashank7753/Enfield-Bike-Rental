const express = require('express');
const RideHistory = require('../models/RideHistory');
const router = express.Router();

// Get ride history for a user
router.get('/:userId', async (req, res) => {
  try {
    const rides = await RideHistory.findAll({ where: { userId: req.params.userId } });
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching ride history' });
  }
});

// Add a new ride
router.post('/:userId', async (req, res) => {
  try {
    const { details } = req.body;
    const newRide = await RideHistory.create({ userId: req.params.userId, details });
    res.json(newRide);
  } catch (err) {
    res.status(500).json({ error: 'Error adding new ride' });
  }
});

module.exports = router;
