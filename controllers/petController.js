const Pet = require('../models/Pet');

// Create new pet profile
exports.createPet = async (req, res) => {
  const { name, age, breed, temperament } = req.body;
  try {
    const pet = new Pet({
      name,
      age,
      breed,
      temperament,
      owner: req.user.id,
    });
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all pets
exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner', 'name email');
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
