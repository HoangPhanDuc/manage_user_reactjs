import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//redux
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./redux/rootReducer";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
