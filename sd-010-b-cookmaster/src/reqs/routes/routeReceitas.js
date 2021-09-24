const express = require('express');

const router = express.Router();
const { createRecipe, recipeList,
  oneRecipe, updateRecipe, excludeRecipe, newImage } = require('../controllers/recipes');
const { validateJWT } = require('../middleware/validadeJwt');
const { verifyName } = require('../middleware/validations');
const { validIngre, validPreparation } = require('../middleware/validadeRecipe');
const { insertImage } = require('../middleware/insertImage');

router.post('/', verifyName, validIngre, validPreparation, validateJWT, createRecipe);
router.get('/', recipeList);
router.get('/:id', oneRecipe);
router.put('/:id/image', validateJWT, insertImage.single('image'), newImage);
router.put('/:id', validateJWT, updateRecipe);
router.delete('/:id', validateJWT, excludeRecipe);

module.exports = router;
