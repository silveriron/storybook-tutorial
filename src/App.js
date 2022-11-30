import "./App.css";

import React from "react";
import { Provider } from "react-redux";

import store from "./lib/store";
import InBoxScreen from "./components/InBoxScreen";

const App = () => {
  return (
    <Provider store={store}>
      <InBoxScreen />
    </Provider>
  );
};

export default App;
