import React from 'react';
import './stylesheets/movies.scss';

// Utilities
import Movie from './../../components/Movies/Movie';

function Movies({ movies }) {
  return (
    <div className="movies-container">
      {movies.map((value, index) => {
        return <Movie key={index} movie={value} />
      })}
    </div>
  );
}

export default Movies;
