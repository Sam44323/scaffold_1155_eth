import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChainId, Config, DAppProvider } from "@usedapp/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config: Config = {
  supportedChains: [ChainId.Rinkeby, 97],
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
