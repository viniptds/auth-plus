const express = require("express");
const router = express.Router();

const {
    getAllClaims,
    getClaim,
    createClaim,
    updateClaim,
    deleteClaim,
} = require("../controller/claimController");

router.route("/").get(getAllClaims).post(createClaim);
router.route("/:id").get(getClaim).patch(updateClaim).delete(deleteClaim);

module.exports = router;