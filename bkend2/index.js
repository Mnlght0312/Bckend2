const express = require("express");

const port = 8070;
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/gg", (request, response) => {
  response.json({ message: "Suka", id: "1" });
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
