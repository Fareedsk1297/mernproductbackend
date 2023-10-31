const express = require("express");
const app = express();
//const port = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(cors());
const userRoute = require("./routes/userRoute");
app.use(express.json());


mongoose.connect((process.env.URI),{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {
    console.log("connected successfully...!");
    

    app.listen(process.env.PORT || 8000, (err) => {
        if(err)console.log(err);
        console.log("running successfully at",process.env.PORT)
    });
})
.catch((error) =>{
    console.log("error", error);
})


app.use(userRoute);



