import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import { store, persistor } from "./redux/store";
import { stripePromise } from "./utils/stripe/stripe.utils";

import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <Elements stripe={stripePromise}>
          <Toaster position='top-right' />
          <App />
        </Elements>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
