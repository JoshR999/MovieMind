import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/CurrentUser";
import SearchBar from "./searchBar";
import { createResource } from "../Request";


function Navigation() {
  let [ searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
    try {
      const data = await createResource(term);
      console.log(data)
      console.log(data.imdbID)
      if (data && data.imdbID) {
        navigate(`/movies/${data.imdbID}`, {state: {movieData: data}});
      } else {
        return `Movie not found :(`;
      }
    } catch (err) {
      return `Failed to fetch movie ${err}`;
    }
  };

  const impAlert = () => {
    alert(`Sorry! Page not implemented yet!`)
  }

  const { currentUser, setCurrentUser } = useContext(UserContext);

  let loginActions = (
    <>
      <li className="nav-item p-2">
        <a href="/sign-up" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sign Up</a>
      </li>
      <li className="nav-item p-2">
        <a href="/" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick={impAlert}>Login</a>
      </li>
    </>
  );

  if (currentUser) {
    loginActions = (
      <li className="nav-item p-2">
        Logged in as {currentUser.firstName} {currentUser.lastName}
      </li>
    );
  }

  let reviewButton = null;

  if (currentUser) {
    reviewButton = (
      <li className="nav-item p-2">
        <button onClick={() => navigate("/leave-review")}>Leave Review</button>
      </li>
    );
  }

  return (
    <nav className="d-flex justify-content-between">
      <h2 className="p-2">
        <a href="/" className="text-light link-underline link-underline-opacity-0">MovieMind</a>
      </h2>
      <SearchBar handleSearch={handleSearch} />
      <ul className="nav">
        <li className="nav-item p-2">
          <a href="/movies/review" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Add a Review</a>
        </li>
        {reviewButton}
        {loginActions}
      </ul>
    </nav>
  );
}

export default Navigation;
