import React from "react";
import "./App.css";
import SignUpForm from "./users/SignUpForm";
import LoginForm from "./users/LoginForm";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrentUserProvider from "./contexts/CurrentUser.js";
import Error404 from "./Error404";
import MovieIndex from "./movies/MovieIndex";
import Splash from "./components/Splash";
import Unimplemented from "./components/Unimplemented";
// import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Splash />} />
            <Route exact path="/sign-up" element={<SignUpForm />} />
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/movies" element={<Splash />} />
            <Route exact path="/movies/:imdbID" element={<MovieIndex />} />
            <Route exact path="/movies/review" element={<Unimplemented />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
