const { Router } = require("express");

const indexRouter = Router();


// using EJS and index.ejs/navbar.ejs to render 'links' locals variables
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Message" },
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
  res.render("index", { title: "Mini Messageboard", links: links, messages: messages });
});
indexRouter.post("/", (req, res) => {
  res.render("message", {title: "Message Details", message: req.body.message });
})
indexRouter.get("/new", (req, res) => {
    res.render("form");
});
// post method to get data from form inputs.
indexRouter.post("/new", (req, res) => {
  messages.push({text: req.body.messageText, user: req.body.authorName, added: new Date() });
  res.redirect("/"); // sends user back to index page after new message submission
})


module.exports = indexRouter;