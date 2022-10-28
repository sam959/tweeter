const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(`selected handle is ${JSON.stringify(req.query.handle)}`);
  res.send('Query param: ' + req.query.handle);
});

function getTweets(handle){
  const baseUrl = 'https://api.twitter.com/2/users/:id/tweets';


  express.get(baseUrl, async (req, res) => {
    if (!BEARER_TOKEN) {
      res.status(400).send(authMessage);
    }
  
    const token = BEARER_TOKEN;
    const requestConfig = {
      url: rulesURL,
      auth: {
        bearer: token,
      },
      json: req.body,
    };
  
    try {
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