import React from "react";
import { BrowserRouter } from "react-router-dom";
import SpatialNavigation from "react-js-spatial-navigation";

import Routes from "./routes";

function App() {
  return (
    <SpatialNavigation
      {...{
        straightOnly: false,
        straightOverlapThreshold: 0.5,
        rememberSource: false,
        disabled: false,
        defaultElement: "",
        enterTo: "",
        leaveFor: null,
        restrict: "self-first",
        navigableFilter: null,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </SpatialNavigation>
  );
}

export default App;
