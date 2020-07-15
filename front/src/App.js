import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routers";

function App() {
  return (
    <Router>
      <React.Fragment>
        <BaseRouter />
      </React.Fragment>
    </Router>


  );
}

export default App;
