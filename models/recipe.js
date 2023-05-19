const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  RecipeId: Number,
  Name: String,
  AuthorId: Number,
  AuthorName: String,
  CookTime: String,
  PrepTime: String,  
  TotalTime: String,
  DatePublished:  Date,
  Description: String,
  Images: String,
  RecipeCategory:String,
  Keywords:  [String],
  RecipeIngredientQuantities: [String],
  RecipeIngredientParts: [String],
  AggregatedRating:  Number,
  ReviewCount:  Number,
  Calories:  Number,
  FatContent: Number,
  SaturatedFatContent:  Number, 
  CholesterolContent:  Number, 
  SodiumContent:  Number,
  CarbohydrateContent: Number,
  FiberContent:  Number, 
  SugarContent: Number, 
  ProteinContent: Number,
  RecipeServings:  Number,
  RecipeYield:  String,
  RecipeInstructions: [String],
});

const recipeModel = mongoose.model('Recipe', recipeSchema);

module.exports = recipeModel;