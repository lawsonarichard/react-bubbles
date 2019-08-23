import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// pages
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";

//styles
import "./styles.scss";
import { Container } from "shards-react";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Container>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/protected" component={BubblePage} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
