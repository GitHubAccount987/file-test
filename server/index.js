const express = require("express");
const app = express();
const PORT = 3000;

// CONFIGURATION \\

app.use((req, res, next) => {

	console.log("Incomming request logged");
	req.recieved = new Date();
	next();
});

// ENDPOINTS \\

app.get("/", (req, res) => {
	res.send(`

<p>Your get request was recieved at <b>${req.recieved.toISOString()}</b></p>
<p>And it was send back at <b>${new Date().toISOString()}</b></p>
<p>Cookis <b>${req.cookies}</b>

`);
});

app.post("/", (req, res) => {
	res.send("POST response");
});

app.put("/", (req, res) => {
	res.send("PUT request");
});

app.delete("/", (req, res) => {
	res.send("DELETE request");
});

// LISTENING \\

app.listen(PORT, () => {
	console.log(`myapp is listening on port ${PORT}`);
});