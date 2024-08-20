
const express = require('express');
const router = express.Router();
const Monstermon = require('../models/monstermon');

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const monstermon = new Monstermon(req.body);
    await monstermon.save();
    res.status(201).json(monstermon);
  } catch (error) {
    next(error);
  }
});

// READ
router.get('/:id', async (req, res, next) => {
  try {
    const monstermon = await Monstermon.findById(req.params.id);
    if (!monstermon) {
      return res.status(404).json({ error: 'Monstermon not found' });
    }
    res.json(monstermon);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.put('/:id', async (req, res, next) => {
  try {
    const monstermon = await Monstermon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!monstermon) {
      return res.status(404).json({ error: 'Monstermon not found' });
    }
    res.json(monstermon);
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const monstermon = await Monstermon.findByIdAndDelete(req.params.id);
    if (!monstermon) {
      return res.status(404).json({ error: 'Monstermon not found' });
    }
    res.json({ message: 'Monstermon successfully deleted' });
  } catch (error) {
    next(error);
  }
});

// LIST
router.get('/', async (req, res, next) => {
  try {
    const { type, limit = 20, page = 1 } = req.query;
    const query = type ? { types: type } : {};

    const total = await Monstermon.countDocuments(query);
    const monstermons = await Monstermon.find(query)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit))
      .select('id name types');

    res.json({
      results: monstermons,
      total,
      page: Number(page),
      limit: Number(limit)
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
