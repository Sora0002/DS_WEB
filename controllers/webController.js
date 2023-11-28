const Post = require('../models/post');

exports.getIndex = async (req, res) => {
  try {
    const posts = await Post.find();
    res.render('index', { posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPost = async (req, res) => {
  if(req.params.id != "new"){
  try {
    const post = await Post.findById(req.params.id);
    res.render('post', { post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}else{
  console.log(req.body)
  res.render('postform');
}
};


exports.getEditPostForm = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render('postform', { post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLoginForm = (req, res) => {
  res.render('login');
};
