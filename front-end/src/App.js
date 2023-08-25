import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./components/css/global.css";
import Container from "./pages/Container";

function App() {
  return (
    <Router>
      <Container />
    </Router>
  );
}

export default App;
