require("dotenv").config();
const express = require("express");
const middleWarez = require("./index.js");
const port = process.env.PORT || 3000;

const app = express();

// Initial page redirecting to Github
app.get("/cms/auth", middleWarez.auth);

// Callback service parsing the authorization token
// and asking for the access token
app.get("/cms/callback", middleWarez.callback);

app.get("/cms/success", middleWarez.success);
app.get("/cms/", middleWarez.index);

app.listen(port, () => {
  console.log("Netlify CMS OAuth provider listening on port " + port);
});
