const express = require("express");
const router = express.Router();

router.post("", (request, response) => {
  response.send("creation de la commande");
});

module.exports = router;
