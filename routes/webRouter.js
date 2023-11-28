const express = require('express');
const webController = require('../controllers/webController');
const { webAuth } = require('../auth'); // Import the webAuth middleware

const router = express.Router();

router.get('/', webController.getIndex);
router.get('/posts/:id', webController.getPost);
router.get('/posts/new', webAuth, webController.getNewPostForm); // Apply webAuth middleware
router.get('/posts/edit/:id', webAuth, webController.getEditPostForm); // Apply webAuth middleware
router.get('/login', webController.getLoginForm);

module.exports = router;
