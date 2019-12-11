import axios from "axios";

const MovieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  timeout: 1000 
});

export default MovieApi;
