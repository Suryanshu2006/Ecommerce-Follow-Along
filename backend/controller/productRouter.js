import express from "express";

const productRouter = express.Router();

import productImages from "../middlewares/multer";

productRouter.post("/addproduct", async (req, res) => {
  productImages.array("images", 6)(req, res, (err) => {
    if (err) {
      return res.status(500).send({ msg: "Something went wrong while uploading images" });
    }
  });
}, async (req, res) => {
  try {
    const { title, description, price } = req.body;
    if (!title || !description || !price) {
      return res.status(404).send({ msg: "Please add all fields" });
    }
    // const images = req.file; // Commented out as it is not used

  } catch (error) {
    return res.status(500).send({ msg: "something went wrong", error });
  }
});