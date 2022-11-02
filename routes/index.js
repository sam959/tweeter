var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  req.app.get('io').on('connection', async (socket) => {
    socket.emit('hello', { message: 'Hello again from server!' })
  })

  res.render('index', { title: 'Express' });
});

module.exports = router;
