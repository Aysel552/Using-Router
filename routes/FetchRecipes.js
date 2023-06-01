const {Router} = require('express');
const router = Router();

let recipes = require("../Recipes");

//GET Request
router.get("/",function(req,res){
    res.json(recipes);
})

//POST Request

router.post("/", function(req,res){
    const newRecipe = {
        name: req.body.name,
        category: req.body.category,
        time: req.body.time
    }
    recipes.push(newRecipe);
    res.json(recipes);
})

// DELETE Request

router.delete("/:id",function(req,res){
    let {name} = req.params;
    let recipeToBeDeleted = recipes.find(recipe => recipe.name === name);

    if(recipeToBeDeleted) {
        res.json({
            recipes: recipes.filter(recipe => recipe.name === name)
        })
    }

    else{
        res.status(404)
        .json({message: `Recipe you are looking for doesn't exist`});
    }
})


// PUT Request

router.put("/:name", function(req,res){
    let {name} = req.params;
    let recipeToBeUpdated = recipes.find(recipe => recipe.name === name);

    if(recipeToBeUpdated) {
        const updateRecipe = req.body;
        recipes.forEach(recipe => {
            if(recipe.name === req.params.name){
                recipe.name = updateRecipe ? updateRecipe.name : recipe.name;
                res.json({message: "Recipe Updated",recipe})
            }
        })
    }

    else{
        res.status(404)
        .json({message: `Recipe you are looking for doesn't exist`});
    }
})


module.exports = router;
