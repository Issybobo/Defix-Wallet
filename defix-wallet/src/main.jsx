import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  
);