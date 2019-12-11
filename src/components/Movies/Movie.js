import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './stylesheets/movies.scss';

// Utilities
import MovieDropdownList from './../../components/Movies/MovieDropdownList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Bootstrap

// Redux

function Movie({ movie }) {
  const [newMovie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (typeof movie === 'object') return;
    setLoading(true);

    axios.get("https://api.themoviedb.org/3/movie/" + movie + "?api_key=3d7fd0461ae8d0f2e808c37fb41950d7")
      .then( data => {
        setMovie(data.data)
        console.log(newMovie)
      })
      .catch( error => console.log(error))
  },[movie, newMovie]);

  return (
    <div className="movie border rounded">
      <h5 className="text-secondary font-weight-bold">{movie.original_title}</h5>
      <p className="text-muted mb-2"><FontAwesomeIcon icon={faStar} className="star"/> {movie.vote_average} / 10</p>
      <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="rounded w-100" alt="Poster"/>
      <div className="addMovie">
        <MovieDropdownList movie={movie} />
      </div>
    </div>
  );
}

export default Movie;
