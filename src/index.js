import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Redux imports
import { Provider } from "react-redux";
import store from "./redux/store";

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application wrapped with the Redux Provider component,
// which provides the store to all the components
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
