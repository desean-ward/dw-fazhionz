const express = require("express");
const app = express();
const { resolve } = require("path");
const cors = require("cors");

// Replace if using a different env file or config
// const env = require("dotenv").config({ path: "./.env" });
require("dotenv").config();

const PORT = process.env.PORT || 5252;

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
});

app.use(cors());
app.use(express.static(process.env.STATIC_DIR));
app.use(express.json());

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  console.log(path);
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  console.log(
    "Publishable Key: ",
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );
  res.send({
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  const { total } = req.body;
  console.log("Total: ", total);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: total,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

// Error handler for CSP violation reports
app.post("/csp-report", (req, res) => {
  const report = req.body;

  // Log or process the CSP violation report
  console.error("CSP Violation Report:", report);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Node server listening at port ${PORT}`));
