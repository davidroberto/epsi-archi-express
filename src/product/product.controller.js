const express = require("express");
const router = express.Router();

router.get("", (request, response) => {
  response.send("Liste des produits !");
});

module.exports = router;
