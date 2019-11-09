let express = require("express");
let app = express();
let mongoose = require("mongoose");
let Postcontroller = require("./controllers/PostController.js");
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
//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Controllers 


//Routes 
app.get("/posts", Postcontroller.all);
app.post("/posts/findOne", Postcontroller.single);
app.post("/posts", Postcontroller.create);
app.post("/posts/update", Postcontroller.update);
app.delete("/posts", Postcontroller.delete);
//Listen

app.listen(5000);