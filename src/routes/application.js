const express = require("express");
const router = express.Router();

const {
    getAllApplications,
    getApplication,
    createApplication,
    updateApplication,
    deleteApplication,
} = require("../controller/applicationController");

router.route("/").get(getAllApplications).post(createApplication);
router.route("/:id").get(getApplication).patch(updateApplication).delete(deleteApplication);

module.exports = router;