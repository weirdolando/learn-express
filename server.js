const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

/**
 * `app.set` is used to set various parameters for our application setting. We can also
 * it to set like key value pairs that we can get using `app.get`
 */
// Set the templating/view engine to handlebars (hbs) because I'm using hbs on this project
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 2000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

/**
 * Path that you passed to `express.static` is relative to where you run Node from.
 * That's why here I use absolute path. `express.static` is used to serve static files
 * Hence, I can access the static files from site path. Look at *index.hbs*, I access the images and CSS from site path
 */
app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  /**
   * Render view index.hbs and pass two values: title, caption
   * `res.render` by default is using layout if there's any
   */
  res.render("index", {
    title: "My Friends Are Clever",
    caption: "Let's go skiing!",
  });
});
// We call this mounting friendsRouter to the app router
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
