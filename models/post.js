const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    trim: true, // Supprime les espaces au début et à la fin du texte
  },
  slug: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 100, // Au moins 100 caractères
  },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
