import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  news_api_key = process.env.REACT_APP_NEWS_API_KEY;

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="noCategory"
                  country="in"
                  api_key={this.news_api_key}
                />
              }></Route>
            <Route
              exact
              path="/top-headlines"
              element={
                <News
                  country="in"
                  key="topHeadlines"
                  api_key={this.news_api_key}
                />
              }></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  country="in"
                  key="business"
                  category="business"
                  api_key={this.news_api_key}
                />
              }></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  country="in"
                  key="entertainment"
                  category="entertainment"
                  api_key={this.news_api_key}
                />
              }></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  country="in"
                  key="general"
                  category="general"
                  api_key={this.news_api_key}
                />
              }></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  country="in"
                  key="health"
                  category="health"
                  api_key={this.news_api_key}
                />
              }></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  country="in"
                  key="science"
                  category="science"
                  api_key={this.news_api_key}
                />
              }></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  country="in"
                  key="sports"
                  category="sports"
                  api_key={this.news_api_key}
                />
              }></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  country="in"
                  key="technology"
                  category="technology"
                  api_key={this.news_api_key}
                />
              }></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
