import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Listing from "./Listing/";
import { getNowPlaying, getGenres } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getNowPlaying();
    this.props.getGenres();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Listing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  getNowPlaying,
  getGenres
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
