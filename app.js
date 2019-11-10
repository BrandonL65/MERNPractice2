let express = require("express");
let app = express();
let mongoose = require("mongoose");
let Postroutes = require("./routes/PostRoutes.js");
let cors = require("cors");
require("dotenv").config();
let PORT = process.env.port || 5000;


//Connect to DB 
let options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}
mongoose.connect(process.env.DB_URL, options)
.then(() => {
  console.log("Connected");
}).catch(err => {
  console.log(err);
})
//Middleware 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Controllers 


//Routes 
app.use("/", Postroutes);
//Listen

app.listen(5000);