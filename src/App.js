import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import Home from "./pages/Home";
import Results from "./pages/Results/index";
import MovieDetail from "./pages/MovieDetail";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/home" />;
        }}
      />
      <div>
        <Route exact path="/home" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/movie/:id" component={MovieDetail} />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
