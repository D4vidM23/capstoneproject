var express = require('express');
var router = express.Router();
const rockController = require('../controllers/rockController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rocks', rockController.viewAll)

router.get('/service', rockController.viewService)
module.exports = router;
