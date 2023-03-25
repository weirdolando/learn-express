const path = require("path");

function getMessages(req, res) {
  /**
   * I use `path.join` so it supports different OS. e.g. Mac and Linux use '/' while windows uses '\'.
   * `path.join` expects an absolute path. `__dirname` returns the absolute path to the directory
   * where this file lives.
   */
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );

  res.render("messages", {
    friend: "Richard Feynman",
  });
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
