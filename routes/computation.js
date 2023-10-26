var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let r=Math.abs(x);
    let t=Math.acos(x);
    let n=Math.sin(x);
    
  res.render('computation', { x:x,abs:r, acos:t, sin:n});
});

module.exports = router;