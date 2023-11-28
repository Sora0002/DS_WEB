const express = require('express');
const webController = require('../controllers/webController');

const router = express.Router();

router.get('/', webController.getIndex);
router.get('/posts/:id', webController.getPost);
router.get('/posts/new', webController.getPost);
router.get('/posts/edit/:id', webController.getEditPostForm);
router.get('/login', webController.getLoginForm);

module.exports = router;
