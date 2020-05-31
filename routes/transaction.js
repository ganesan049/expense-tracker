const { Router } = require("express");
const router = Router();
const {
  getTransaction,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transaction");

router.route("/").get(getTransaction).post(addTransaction);

router.route("/:id").delete(deleteTransaction);

module.exports = router;
