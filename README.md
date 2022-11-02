
<a name="readme-top"></a>


<h3 align="center">tweeter</h3>
 <p align="center">
 A node.js project intergrating Twitter API
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ensure that you have [Node.js installed](https://nodejs.org/en/download/).

This project uses **Twitter API**.
Follow [this guide](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api) to register your app and get a set of keys to authenticate your API calls.

### Installation

1. Make sure you got access to the Twitter API [here](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api) and have registred yor app.
2. Clone the repo
   ```sh
   git clone https://github.com/sam959/tweeter.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create an `.env` file in the root of the project, and write there your API key as follows:
   ```js
   BEARER_TOKEN = 'ENTER YOUR API KEY';
   ```
   *Optional*
   
   You can create your .env file using
   ```sh
   cat > .env
   BEARER_TOKEN = 'ENTER YOUR API KEY'
   ```
   and then press CTRL+D when you're finished.

   You can specify the port where to expose your app adding
   ```
   PORT = 6060
   ```
   to your `.env`. If you do not specify a port, it defaults to 8080.
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Run in dev mode:
   ```js
   npm run dev
   ```
Go to the hompage at [localhost:6060](http://localhost:6060/) (or whatever port you specified in your `.env` file) and write in the text box the handle of the Twitter account you want to track.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Samantha - [@samlovv_](https://twitter.com/samlovv_) - samanthalovisolo@gmail.com

Project Link: [tweeter](https://github.com/sam959/tweeter)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.dev/en/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/


