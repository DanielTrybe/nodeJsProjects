const { insertRecipe, getRecipes, 
  getOneRecipes, updRecipeModel, delRecipe, insertImageModel } = require('../models/recipeModel');

const createRecipe = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id } = req.user;
  const insert = await insertRecipe(name, ingredients, preparation, _id);
  return res.status(201).json(insert);
};

const recipeList = async (req, res) => {
  const list = await getRecipes();
  return res.status(200).json(list); 
};

const oneRecipe = async (req, res) => {
  const { id } = req.params;
  if (id.length <= 23) return res.status(404).json({ message: 'recipe not found' });
  const result = await getOneRecipes(id);
  if (result === 0) return res.status(404).json({ message: 'recipe not found' });
  return res.status(200).json(result);
};

const updateRecipe = async (req, res) => {
  const item = req.body;
  const { id } = req.params;
  const { _id } = req.user;
  const result = await updRecipeModel(id, item, _id);
  return res.status(200).json(result);
};

const excludeRecipe = async (req, res) => {
  const { id } = req.params;
  await delRecipe(id);
  return res.status(204).send();
};

const newImage = async (req, res) => {
  const { path } = req.file;
  const { id } = req.params;
  const result = await insertImageModel(id, path);
  return res.status(200).json(result);
};

// https://ricardo-reis.medium.com/string-replace-para-substituir-substrings-no-javascript-6db625e5fbc5

module.exports = { createRecipe, recipeList, oneRecipe, updateRecipe, excludeRecipe, newImage };
