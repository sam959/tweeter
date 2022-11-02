"use strict";

var express = require('express');

var app = express();
var router = express.Router();

var _require = require('../controller/tweets'),
    getTweets = _require.getTweets;

var _require2 = require('../controller/userInfo'),
    getUserInfo = _require2.getUserInfo;

var _require3 = require('../controller/mockedTweets'),
    getLocalTweets = _require3.getLocalTweets;

var _require4 = require('../controller/rules'),
    setRules = _require4.setRules;

var _require5 = require('../controller/streamTweets'),
    streamTweets = _require5.streamTweets;

var _require6 = require('../controller/test'),
    initiateStream = _require6.initiateStream;
/*
router.get('/', function(req, res, next) {
  const handle = req.query.handle;
  console.log(`------> selected handle is ${JSON.stringify(handle)}`);
  getUserInfo(req, res);
  //getTweets(req, res);
  //res.render('tweeter',{handle : handle})
  //res.send('Query param: ' + req.query.handle);
});
*/


router.get('/', getUserInfo, getLocalTweets, initiateStream); //router.get('/', getUserInfo, getLocalTweets, getTweets);

function localTweets(handle) {
  var baseUrl = "https://api.twitter.com/2/users/".concat(handle, "/tweets");
  console.log("getting tweets by handle ".concat(handle));
  app.get('/', function _callee(req, res) {
    var token, requestConfig, response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!process.env.BEARER_TOKEN) {
              res.status(400).send(authMessage);
            }

            token = BEARER_TOKEN;
            console.log("sending request tweets by handle ".concat(handle));
            requestConfig = {
              url: baseUrl,
              auth: {
                bearer: token
              }
            };
            _context.prev = 4;
            console.log("sending request tweets by handle ".concat(requestConfig));
            _context.next = 8;
            return regeneratorRuntime.awrap(post(requestConfig));

          case 8:
            response = _context.sent;

            if (!(response.statusCode === 200 || response.statusCode === 201)) {
              _context.next = 13;
              break;
            }

            res.send(response);
            _context.next = 14;
            break;

          case 13:
            throw new Error(response);

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            res.send(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 16]]);
  });
}

module.exports = router;