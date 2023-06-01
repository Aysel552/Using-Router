const express = require('express');
const app = express();

const recipesRoute = require("./routes/FetchRecipes")

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/recipes', recipesRoute);

app.listen(5000, function(){
    console.log('PORT 5000 - It is working')
})