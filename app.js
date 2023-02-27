const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const middleWarez = require("./index.js");
const port = process.env.PORT || 3000;

const app = express();

// Initial page redirecting to Github
app.get(`${process.env.BASE_PATH}/auth`, middleWarez.auth);

// Callback service parsing the authorization token
// and asking for the access token
app.get(`${process.env.BASE_PATH}/callback`, middleWarez.callback);

app.get(`${process.env.BASE_PATH}/success`, middleWarez.success);
app.get(`${process.env.BASE_PATH}/`, middleWarez.index);

app.listen(port, () => {
  console.log("Netlify CMS OAuth provider listening on port " + port);
});
