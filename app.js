const express = require("express");
const path = require("node:path"); // enables EJS as the view engine, and that our app should look for templates in the /views subdirectory.
const app = express();

// serving static assets. This tells express where to look for these assets, the 'public' directory.
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath)); // express.static is middleware funtion enabling use of static assets

// Letting app know we are using EJS as template engine and telling it where to find template view files.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");


app.use("/", indexRouter);

/* error handling */
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app - listening on port ${PORT}`);
});
