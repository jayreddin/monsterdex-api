
const mongoose = require('mongoose');

const monstermonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  types: { type: [String], required: true },
  stats: {
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    specialAttack: { type: Number, required: true },
    specialDefense: { type: Number, required: true },
    speed: { type: Number, required: true }
  },
  abilities: [{
    name: { type: String, required: true },
    description: { type: String, required: true }
  }],
  moves: [{
    name: { type: String, required: true },
    type: { type: String, required: true },
    power: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    description: { type: String, required: true }
  }],
  description: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  category: { type: String, required: true },
  habitat: { type: String, required: true },
  weakness: { type: [String], required: true },
  evolution_chain: { type: [String], required: true }
});

module.exports = mongoose.model('Monstermon', monstermonSchema);
