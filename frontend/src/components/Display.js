import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../Loading";
import { createResource } from "../Request";
import { Image, ListGroup, Container } from "react-bootstrap";

function Display() {
  const { imdbID } = useParams();

  const location = useLocation()
  const data = location.state?.movieData

  if(!data) {
    return <Loading />
  }

  if (data.imdbID !== imdbID) {
    return `Invalid ID`
  }

  console.log(data)

  return (
    <Container className="d-flex justify-content-center">
      <Image src={data.Poster} alt="Movie Poster" rounded className="m-3 movieImage"/>
      <div className="m-3">
        <ListGroup>
          <ListGroup.Item variant="dark">
            <h2>
              {data.Title}
            </h2>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <h4>
              Release date: {data.Released}
            </h4>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <h4>
              Rated: {data.Rated}
            </h4>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <h3>
              IMDB Rating: {data.imdbRating}
            </h3>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <h4>
              Main Actors: {data.Actors}
            </h4>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <h5>
              Writer(s): {data.Writer}
            </h5>
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <h6>Plot:</h6>
            <p>{data.Plot}</p>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  )
}

export default Display;

{/* <h2>{data.Title}</h2>
        <h4>{data.Year}</h4>
        <h4>{data.Rating}</h4>
        <h3>IMDB Rating: {data.imdbRating}</h3>
        <h4>Main Actors: {data.Actors}</h4> */}