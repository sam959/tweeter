const express = require('express');
const app = express();
const router = express.Router();
const  { 
  getTweets
} = require('../controller/tweets')

const  { 
  getUserInfo
} = require('../controller/userInfo')

const  { 
  getLocalTweets
} = require('../controller/mockedTweets')

const  { 
  setRules, getRules, deleteRules
} = require('../controller/rules')

const {
  initiateStream
} = require('../controller/streamTweets')
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

router.get('/', getRules, deleteRules, setRules, getUserInfo, getTweets, initiateStream);
//router.get('/', getRules, deleteRules, setRules, getUserInfo, getLocalTweets, initiateStream);
//router.get('/', getUserInfo, getLocalTweets, getTweets);

module.exports = router;