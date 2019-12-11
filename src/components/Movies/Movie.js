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
  const [movieData, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    console.log(movie)
    let movieId = movie;
    setLoading(true);
    
    if (typeof movie === 'object') {
      movieId = movie.id;
    }

    axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=3d7fd0461ae8d0f2e808c37fb41950d7")
      .then( data => {
        console.log(data)
        setMovie(data.data)
        setLoading(false)
      })
      .catch( error => console.log(error))
  },[]);

  if (loading) return <span>Loading...</span>

  return (
    <div className="movie border rounded">
      <h5 className="text-secondary font-weight-bold">{movieData.original_title}</h5>
      <p className="text-muted mb-2"><FontAwesomeIcon icon={faStar} className="star"/> {movieData.vote_average} / 10</p>
      <img src={"https://image.tmdb.org/t/p/w500/" + movieData.poster_path} className="rounded w-100" alt="Poster"/>
      <div className="addMovie">
        <MovieDropdownList movie={movie} />
      </div>
    </div>
  );
}

export default Movie;
