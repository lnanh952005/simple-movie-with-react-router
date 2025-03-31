const tmdbEnpoint = "https://api.themoviedb.org/3/movie";
export const apiKey = "b214ffc928a4d0c4b361593fdb4ad6ad";
const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEnpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieId: (id) => `${tmdbEnpoint}/${id}?api_key=${apiKey}`,
  getMovieDetail: (type, id) =>
    `${tmdbEnpoint}/${id}/${type}?api_key=${apiKey}`,
  getOriginalImg: (large, path) =>
    `https://image.tmdb.org/t/p/${large || "original"}${path}`,
  getSearchMovie: (search, page = 1) =>
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${apiKey}&page=${page}`,
  getYoutubeTrailer: (link) => `https://www.youtube.com/embed/${link}`,
};

export default tmdbAPI;
