var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login-page',function(req,res,next){
  res.render('login',{data:req.query});
})
router.get('/forgot-password',(req,res)=>{
  res.send("Reset code is sent on your registered mail")
})

module.exports = router;
