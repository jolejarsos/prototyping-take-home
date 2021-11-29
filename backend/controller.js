import express from "express";

const router = express.Router(); // eslint-disable-line new-cap

// create a new locaiton
router.post("/api/location", async (req, res) => {
  // print out lat, lng
  console.log(req.body);

  res.json({ status: 200 });
});

export default router;
