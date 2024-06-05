const mongoose = require('mongoose');
const express = require ('express');
const router = require('./Routes/UserRoutes');

const app = express();

//Middleware
app.use(express.json());
app.use("/users",router);

//Password = nisal123
mongoose.connect("mongodb+srv://nisal:nisal123@mernapp.xtduep0.mongodb.net/?retryWrites=true&w=majority&appName=mernApp")
.then(() =>{
    app.listen(5000);
    console.log("DB Connected")
})
.catch((err) => {
    console.log(err);
})

