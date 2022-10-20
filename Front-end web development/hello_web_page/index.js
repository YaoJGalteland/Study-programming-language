// Load the Express package as a module
const express = require("express");

// Access the exported service
const app = express();

// Return a web page for requests to "/hello"
app.get("/", (request, response) => {
response.sendFile(`${__dirname}/views/hello.html`);
});
// Serve content of the "public" subfolder directly,  tell Express that client assets are located in the public subfolder
app.use(express.static("public"));

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
