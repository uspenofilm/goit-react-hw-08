import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
