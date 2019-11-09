let express = require("express");
let app = express();
let mongoose = require("mongoose");
let PORT = 5000;


//Connect to DB 
let options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}
mongoose.connect("mongodb+srv://brandon123:123@devconnection-dazbv.mongodb.net/test?retryWrites=true&w=majority", options)
.then(() => {
  console.log("Connected");
}).catch(err => {
  console.log(err);
})
//Controllers 


//Routes 


//Listen

app.listen(5000);