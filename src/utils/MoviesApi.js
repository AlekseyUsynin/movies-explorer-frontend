class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrlMovies;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => this._checkResponse(res));
  }
}
const moviesApi = new MoviesApi({
  baseUrlMovies: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
