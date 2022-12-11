const express = require("express");
const router = express.Router();

const {
    getAllRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole,
} = require("../controller/roleController");

router.route("/").get(getAllRoles).post(createRole);
router.route("/:id").get(getRole).patch(updateRole).delete(deleteRole);

module.exports = router;