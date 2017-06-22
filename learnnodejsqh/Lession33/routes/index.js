var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/student/:name',function (req, res, next) {
	var name = req.params.name;
	res.cookie("name",name);
	res.send("Student is : " + name);
});

router.get('/info',function (req, res, next) {
	res.send("Student is : " + req.cookies.name);
});

router.get('/thong-tin',function(req, res, next) {
	res.send("Student is : " + req.cookies.name);
});

router.get('/clear',function(req, res, next) {
	res.clearCookie("name").send();
});

router.get('/setss',function(req, res, next) {
	req.session.name = "Vu Quoc Tuan";
	res.send("Day la trang tao Session");
});

router.get('/getss',function(req, res, next) {
	//res.send(req.session.id);
	res.send("Chao ban : " + req.session.name);
});

router.get('/delss',function(req, res, next) {
	req.session.destroy;
	res.send("Day la trang xoa session");
});

router.get('/send-flash',function(req, res, next) {
	req.flash('Welcome','Chao mung ban den voi QuocTuan.Info');
	res.redirect('/get-flash');
});

router.get('/get-flash',function(req, res, next) {
	var msg = req.flash('Welcome');
	res.render('flash', {msg : msg})
});

router.get('/send-flash-multi',function(req, res, next) {
	var subject = [];
	subject.push('NodeJS');
	subject.push('AngularJS');
	req.flash('Welcome',subject);
	// req.flash('Welcome',['Nodejs','PHP & MYSQL','Android']);
	res.redirect('/get-flash-multi');
});

router.get('/get-flash-multi',function(req, res, next) {
	var msg = req.flash('Welcome');
	res.render('flash', {msg : msg})
});


module.exports = router;
