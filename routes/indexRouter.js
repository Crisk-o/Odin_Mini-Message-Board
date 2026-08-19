const { Router } = require("express");

const indexRouter = Router();

// pathing example
// indexRouter.get("/", (req, res) => res.send("Index type s"));

// using EJS and index.ejs template variable 'message'
// indexRouter.get("/", (req, res) => {
//   res.render("index", { message: "EJS rocks!" });
// });

// using EJS and index.ejs/navbar.ejs to render 'links' locals variables
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "About" },
];
// sample array of messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.get("/new", (req, res) => {
    res.render("form", {});
});


module.exports = indexRouter;