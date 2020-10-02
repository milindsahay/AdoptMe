import { createStore } from "redux";
import reducer from "./reducers/";

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof window._REDUX_DEVTOOLS_EXTENSION != "undefined"
    ? window._REDUX_DEVTOOLS_EXTENSION()
    : (f) => f
);

export default store;
