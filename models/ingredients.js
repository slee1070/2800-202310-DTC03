// module.exports = ingredientsModel;
const mongoose = require('mongoose');

// Define the schema for the ingredients collection
const ingredientSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  }
});

// Create a model using the ingredient schema
const ingredientsModel = mongoose.model('ingredients2', ingredientSchema);

// Export the model for use in other parts of the app
module.exports = ingredientsModel;

