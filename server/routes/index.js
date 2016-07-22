var router = require('express').Router();

router.get('/about', function(req, res) {
  res.send('There were so many goots we needed an api!');
})

router.get('/this', function(req, res) {
  res.send('this is so goot!')
});

router.get('/this/:thing', function(req, res) {
  res.send('this ' + req.params.thing + ' is so goot!')
});

router.get('/place', function(req, res) {
  res.send('this place is so goot!')
})

router.get('/place/:/place', function(req, res) {
  res.send('this ' + req.params.place + ' is so goot!');
})

router.get('/goot', function(req, res) {
  res.send('so goot!')
})

router.get('/goot/:num', function(req, res) {
  if (Number(req.params.num) < 1000) {
    var str = stringBuilder('so goot', Number(req.params.num));
    res.send(str);
  } else {
    res.send('You\'ve overloaded the goot server!')
  }
})

function stringBuilder(str, count) {
  var newStr = [];
  for (var i = 0; i < count; i++) {
    newStr.push(str);
  }
  return newStr.join(' ');
}

module.exports = router;
