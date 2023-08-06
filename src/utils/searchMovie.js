
export const Search = (cards, key, isShort) => {
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
};
