const { Router } = require("express");
const router = Router();


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


router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
router.get("/new", (req, res) => {
  res.render("form");
});
router.get("/details/:idx", (req, res) => {
  const msgIdx = req.params.idx;
  const msg = messages[msgIdx];
  res.render("details", { title: "Message Details", message: msg });
});

router.post("/new", (req, res) => {
  const msgUser = req.body.user;
  const msgText = req.body.message;
  messages.push({ text: msgText, user: msgUser, added: new Date() });
  res.redirect("/")
});


module.exports = router;