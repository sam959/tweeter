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
  setRules, getRules
} = require('../controller/rules')

const  { 
  streamTweets
} = require('../controller/needleStream')

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

router.get('/', getRules,getUserInfo, getLocalTweets, initiateStream);
//router.get('/', getUserInfo, getLocalTweets, getTweets);


function localTweets(handle){
  const baseUrl = `https://api.twitter.com/2/users/${handle}/tweets`;

  console.log(`getting tweets by handle ${handle}`);

  app.get('/', async (req, res) => {
    if (!process.env.BEARER_TOKEN) {
      res.status(400).send(authMessage);
    }
  
    const token = BEARER_TOKEN;

    console.log(`sending request tweets by handle ${handle}`);

    const requestConfig = {
      url: baseUrl,
      auth: {
        bearer: token,
      }
    };
  
    try {
      console.log(`sending request tweets by handle ${requestConfig}`);

      const response = await post(requestConfig);
  
      if (response.statusCode === 200 || response.statusCode === 201) {
        res.send(response);
      } else {
        throw new Error(response);
      }
    } catch (e) {
      res.send(e);
    }
  });
}

module.exports = router;