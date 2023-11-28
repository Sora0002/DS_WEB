const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/', apiController.getRoutes);
router.get('/posts', apiController.getPosts);
router.get('/posts/:id', apiController.getPostById);
router.post('/posts', apiController.createPost);
router.put('/posts', apiController.editPost);
router.delete('/posts/:id', apiController.deletePost);
router.post('/login', apiController.login);

module.exports = router;
