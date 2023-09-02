const express = require("express");
const routes = require("./routes/notesRoutes");

const app = express();
const port = 3000;

app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log("listening on", port);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke");
});
