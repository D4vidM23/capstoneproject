var express = require('express');
var router = express.Router();
const rockController = require('../controllers/rockController.js');
const userController =require('../controllers/userController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rocks', rockController.viewAll);
router.get('/viewRocks/view/:id', rockController.viewRock);
router.get('/add', rockController.renderAddForm)
router.get('/viewRocks/edit/:id', rockController.renderEditForm)

router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.register);

router.get('/service', rockController.viewService)
module.exports = router;
