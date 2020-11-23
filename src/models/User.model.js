const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  // Put your User Schema here
  name: { type: String, required: true },
  birthday: { type: String, required: true },
  age: { type: Number, required: true },
  temperature: { type: Number, required: true },
  clothingColor: { type: String, required: true },
  isPartyng: { type: Boolean, required: true },
  role: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
