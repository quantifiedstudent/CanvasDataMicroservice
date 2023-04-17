import express from "express";

const router = express.Router();


router.get('/a', function (req, res) {
    res.status(200).send("welcome to the subbmissions");
});

export default router;

