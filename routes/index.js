var express = require('express');
var router = express.Router();
const rockController = require('../controllers/rockController.js');
const userController =require('../controllers/userController.js');
const pageController =require('../controllers/pageController.js');
const redirectGuests = require('../middleware/redirectGuests')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rocks', rockController.viewAll);
router.get('/viewRocks/view/:id', rockController.viewRock);
router.get('/add', rockController.renderAddForm)
router.get('/viewRocks/edit/:id', rockController.renderEditForm);
router.post('/viewRocks/edit/:id', rockController.updateRock);

router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.registerUser);
router.get('/login', userController.renderLoginForm);
router.post('/login', userController.loginUser);
router.get('/logout', userController.logout);

router.get('/profile', pageController.viewProfile);

router.get('/service', rockController.viewService)
module.exports = router;
