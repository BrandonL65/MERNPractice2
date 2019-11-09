let PostModel = require("../models/PostModel.js");

let PostControls = {
  all: async (req,res) => {
    let allPosts = await PostModel.find();
    res.json(allPosts);
  },
  single: async (req,res) => {
    let singlePost = await PostModel.find({title: req.body.title});
    res.json(singlePost);
  },
  create: async (req,res) => {
    let newPost = new PostModel({
      title: req.body.title,
      content: req.body.content,
      rating: parseInt(req.body.rating)
    })
    let savedPost = await newPost.save();
    res.json(savedPost)
  },
  update: async ( req,res ) => {
    let foundPost = await PostModel.findOneAndUpdate({title: req.body.title}, req.body, {
      useFindAndModify: false
    });
    res.json(foundPost);
  }
}
module.exports = PostControls;