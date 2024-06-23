import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessMessage from "./components/SuccessMessage";
import Container from "./components/Container";
import './Container.css';
function App ()  {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Container} />
          <Route exact path="/success" Component={SuccessMessage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
