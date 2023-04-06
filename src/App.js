import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const news_api_key = process.env.REACT_APP_NEWS_API_KEY;
  const [activeCategory, setActiveCategory] = useState("home");

  return (
    <>
      <Router>
        <Navbar activeCategory={activeCategory} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="noCategory"
                country="in"
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
              />
            }></Route>
          <Route
            exact
            path="/top-headlines"
            element={
              <News
                country="in"
                key="topHeadlines"
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
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
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
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
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
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
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
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
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
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
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
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
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
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
                api_key={news_api_key}
                setActiveCategory={setActiveCategory}
              />
            }></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
