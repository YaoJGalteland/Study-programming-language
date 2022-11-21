// Load the Express package as a module
const express = require("express");

// Access the exported service
const app = express();

// Return a web page for requests to "/"
app.get("/", (request, response) => {
response.sendFile(`${__dirname}/views/webpage.html`);
});
// Serve content of the "public" subfolder directly,  tell Express that client assets are located in the public subfolder
app.use(express.static("public"));

/*---------- API ----------*/
// Creating an API
// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Define an article list
const articles = [];

// Return the articles list in JSON format
app.get("/api/articles", (request, response) => {
  response.json(articles);
});

/*---------- Response to POST ----------*/
// Handle form data
// Load the multer package as a module
const multer = require("multer");
  
// Access the exported service
const upload = multer();

// Web route
app.post("/articles", upload.array(), (request, response) => {
  const title = request.body.title;
  const content = request.body.content; 
  // Add new article to the list
  articles.push({ title, content });
  response.send(`New article added successfully with title ${title}!`);
});
 
/*---------- Listening ----------*/
// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
