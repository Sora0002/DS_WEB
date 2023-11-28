const Post = require('../models/post');

exports.getRoutes = (req, res) => {
  const routes = [
    '/api/posts (GET)',
    '/api/posts/:id (GET)',
    '/api/posts (POST)',
    '/api/posts (PUT)',
    '/api/posts/:id (DELETE)',
    '/login (POST)',
  ];
  res.json(routes);
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    console.table(req.body)
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editPost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = (req, res) => {
  const { user, password } = req.body;
  if (user === 'admin' && password === '123') {
    // Assuming you have a JWT library installed and set up
    const token = generateJWT(); // Implement your JWT generation logic
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
