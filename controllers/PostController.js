let PostModel = require("../models/PostModel.js");

let PostControls = {
  all: async (req,res) => {
    let allPosts = await PostModel.find();
    res.json(allPosts);
  },
  create: async (req,res) => {
    let newPost = new PostModel({
      title: req.body.title,
      content: req.body.content,
      rating: parseInt(req.body.rating)
    })
    let savedPost = await newPost.save();
    res.json(savedPost);
  }
}
module.exports = PostControls;