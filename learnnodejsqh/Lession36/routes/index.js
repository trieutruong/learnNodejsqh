var express = require('express');
var multer  = require('multer');
var router = express.Router();

var storage = multer.diskStorage({ 
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});

function extFile(req, file, cb) {
	if (!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)) {
		return cb(new Error('Chi chap nhan file hinh'));
	} else {
		cb(null,true);
	}
}

var upload = multer({ storage: storage , fileFilter : extFile });
/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index');
});

router.get('/album', function(req, res, next) {
	var folder = './upload/';
	var fs     = require('fs');
	fs.readdir(folder, function (err,file) {
	 	res.render('album',{file : file});
	});	
});

router.get('/delete/:file', function(req, res, next) {
	
});

router.get('/download/:file', function(req, res, next) {

});


router.post('/upload', upload.any(), function(req, res, next) {
	return res.status(200).send(req.file); // status 200 co y nghia la cu load xong mot hinh thi load hinh tiep theo
});

module.exports = router;
