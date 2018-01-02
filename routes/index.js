var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Basic Express Site' });
});

router.get('/users', function(req, res, next) {
	res.render('users', { title: 'Users Page'});
})

module.exports = router;
