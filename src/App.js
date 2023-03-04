import React from "react";
import { Routes, Route } from "react-router-dom";

import uniqid from "uniqid";

import { Paths_Map } from "./path";

const App = () => {
  return (
    <Routes>
      {Paths_Map.map((pathObj) => (
        <Route key={uniqid()} path={pathObj.path} element={pathObj.component} />
      ))}
    </Routes>
  );
};

export default App;
