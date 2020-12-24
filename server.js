const express = require('express');
const app = express();
const foodRoutes = require('./routes/foodRoutes.js');


app.use('/foods', foodRoutes)



app.listen(8080, () => {
    console.log('server listening in port 8080');
})