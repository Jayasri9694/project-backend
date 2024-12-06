const express = require('express');
const Pet = require('../models/Pet');
const router = express.Router();

// GET: Fetch all pets
router.get('/pets', getpets);

// GET: Fetch pet by ID
router.get('/pets/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pet details' });
  }
});


// POST: Add a new pet
router.post('/pets', async (req, res) => {
  const { name, age, breed, temperament, specialNeeds } = req.body;
  try {
    const newPet = new Pet({ name, age, breed, temperament, specialNeeds });
    await newPet.save();
    res.status(201).json({ message: 'Pet added successfully', pet: newPet });
  } catch (error) {
    res.status(500).json({ message: 'Error adding pet', error: error.message });
  }
});


module.exports = router;
