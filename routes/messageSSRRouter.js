// // router.js

const express = require("express");
const router = express.Router();
// controller functions
const blogSSR = require("../controllers/messageSSRController");
const verifyToken = require("../middlewares/requireAuthSSR")

// require auth for all routes
router.use(verifyToken)

// SSR
// End1: Route to render index.html with messages using EJS
router.get("/", blogSSR.renderMessages);
// End2: Define a route to render the addmessage.ejs view
router.get("/addmessage", blogSSR.renderForm);
// End3:Route to add  message using EJ
router.post("/addmessage", blogSSR.addMessage);
// Define a route to render the singlemessage.ejs view
router.get("/single-message/:id", blogSSR.renderMessage);
// Define a route to delete singlemessage
router.delete("/single-message/:id", blogSSR.deleteMessage);
// Define a route to update single message.ejs
router.put("/single-message/:id", blogSSR.updateMessage);
// Define message to update
router.get("/single-message/update/:id", blogSSR.renderUpdateMessage);

module.exports = router;

