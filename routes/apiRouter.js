const express = require('express');
const apiController = require('../controllers/apiController');
const { apiAuth } = require('../auth'); // Import the apiAuth middleware

const router = express.Router();

router.get('/', apiController.getRoutes);
router.get('/posts', apiController.getPosts);
router.get('/posts/:id', apiController.getPostById);
router.post('/posts', apiAuth, apiController.createPost); // Apply apiAuth middleware
router.put('/posts/:id', apiAuth, apiController.editPost); // Apply apiAuth middleware
router.delete('/posts/:id', apiAuth, apiController.deletePost); // Apply apiAuth middleware
router.post('/login', apiController.login);

module.exports = router;
