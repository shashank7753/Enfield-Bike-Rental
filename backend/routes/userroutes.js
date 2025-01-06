const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get user details by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching user details' });
  }
});

// Update wallet balance
router.put('/:id/wallet', async (req, res) => {
  try {
    const { amount } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.walletBalance += amount;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error updating wallet balance' });
  }
});

module.exports = router;
