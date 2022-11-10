const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.connect");
const allProducts = require("./model/product.model");
const User = require("./model/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cart_product = require("./model/cart.model");

const app = express();
const PORT = process.env.PORT;

app.use(express.json(), cors());

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/allproducts/:category/:type", async (req, res) => {
  const { type, category } = req.params;
  const { brand, size, price,sort } = req.query;
  let price_filter;

  switch (price) {
    case "lt500":
      price_filter = { price: { $lte: 500 } };
      break;
    case "500-to-1000":
      price_filter = {
        $and: [{ price: { $gte: 500 } }, { price: { $lte: 1000 } }],
      };
      break;
    case "1000-to-1500":
      price_filter = {
        $and: [{ price: { $gte: 1000 } }, { price: { $lte: 1500 } }],
      };
      break;
    case "1500-to-2000":
      price_filter = {
        $and: [{ price: { $gte: 1500 } }, { price: { $lte: 2000 } }],
      };
      break;
    default:
      price_filter = {};
      break;
  }

  const data = sort
  ? await allProducts
      .find({
        $and: [
          { type, category },
          {
            $and: [
              brand ? { brand: { $in: brand } } : {},
              size ? { size: { $all: size } } : {},
              price ? price_filter : {},
            ],
          },
        ],
      })
      .sort({price:sort==="asc"?1:-1})
  : await allProducts.find({
      $and: [
        { type, category },
        {
          $and: [
            brand ? { brand: { $in: brand } } : {},
            size ? { size: { $all: size } } : {},
            price ? price_filter : {},
          ],
        },
      ],
    });

  res.send(data);
});

app.post("/max-fashion/signup", async (req, res) => {
  const { user_name, email, password } = req.body;
  let existinguser;
  try {
    existinguser = await User.findOne({ email });
  } catch (err) {
    return console.log("err");
  }
  if (existinguser) {
    return res.status(400).json({ message: "user already exist", error: true });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    user_name,
    email,
    password: hashedPassword,
  });

  try {
    user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(202).json({ message: "signup success", error: false });
});

app.post("/max-fashion/login", async (req, res) => {
  const { email, password } = req.body;
  let existinguser;
  try {
    existinguser = await User.findOne({ email });
  } catch (err) {
    return console.log("err");
  }
  if (!existinguser) {
    return res
      .status(404)
      .json({ message: "could not find user by this credential", error: true });
  }
  const ispasswordcorrect = bcrypt.compareSync(password, existinguser.password);
  if (!ispasswordcorrect) {
    return res
      .status(400)
      .json({ message: "Invalid Credentials", error: true });
  }
  const token = jwt.sign(
    {
      name: existinguser.name,
      id: existinguser._id,
    },
    "SECRET"
  );
  return res.status(200).json({
    message: "Login sucessful",
    error: false,

    user: {
      _id: existinguser._id,
      user_name: existinguser.user_name,
      email: existinguser.email,
      token,
    },
  });
});

app.get("/max-fashion/cart/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const all_cart_products = await cart_product.find({ user_id }, { _id: 0 });
    return res.status(200).json(all_cart_products);
  } catch (error) {
    return res.send({ message: "something went wrong", error: true });
  }
});

app.post("/max-fashion/cart", async (req, res) => {
  try {
    const cart_item = req.body;
    const existinguser = await cart_product.find({
      user_id: cart_item.user_id,
      product_id: cart_item.product_id,
    });
    if (existinguser[0]) {
      return res
        .status(400)
        .json({ message: "Item already exists in your Basket", error: true });
    } else {
      await cart_product.insertMany(cart_item);
      return res
        .status(200)
        .json({ message: "Item added to your Basket", error: false });
    }
    return res.send("got cart_item");
  } catch (error) {
    return res.send({ message: "Please Login first", error: true });
  }
});

app.patch("/max-fashion/cart/quantity", async (req, res) => {
  try {
    const { quantity, user_id, product_id } = req.body;

    await cart_product.updateOne(
      { user_id, product_id },
      { $set: { quantity: quantity } }
    );

    return res.status(200).json({ message: "quantity updated", error: false });
  } catch (error) {
    return res.send({ message: "something went wrong", error: true });
  }
});

app.delete("/max-fashion/cart/:user_id/:product_id", async (req, res) => {
  try {
    const { user_id, product_id } = req.params;

    await cart_product.deleteMany({ user_id, product_id });

    return res
      .status(200)
      .json({ message: "item deleted from cart", error: false });
  } catch (error) {
    return res.send({ message: "something went wrong", error: true });
  }
});

app.get("/max-fashion/product/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;

    const product = await allProducts.find({ _id:product_id });

    return res
      .status(200)
      .json({ product, message: "found product", error: false });
  } catch (error) {
    return res.send({ message: "something went wrong", error: true });
  }
});

app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log("connected to db successfully");
  } catch (error) {
    console.log("something went wrong while connecting to db");
  }
  console.log(`Server listening on localhost:${PORT}`);
});
