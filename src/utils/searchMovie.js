
export const Search = (cards, key, isShort, movies, savedMovies) => {
  if (movies) {
    if (key) {
      const filtered = cards.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(key.toLowerCase())
      });
      if (isShort) {
        return filtered.filter(movie => movie.duration < 40);
      } else {
        return filtered;
      }
    }
  } 
  if (savedMovies) {
    if (key) {
      const filtered = cards.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(key.toLowerCase())
      });
      if (isShort) {
        return filtered.filter(movie => movie.duration < 40);
      } else {
        return filtered;
      }
    } else {
      const filtered = cards
      if (isShort) {
        return filtered.filter(movie => movie.duration < 40);
      } else {
        return filtered
      }
    }
  }
};
