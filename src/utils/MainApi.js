
class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  register =
    (items) => {
      return fetch(`${this._baseUrl}/signup`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify
          ({
            name: items.name,
            email: items.email,
            password: items.password,
          })

      })
        .then(res => this._checkResponse(res))
    };

  authorize = ({email, password}) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then(res => this._checkResponse(res))
  }

  signOut = () => {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
      .then(res => this._checkResponse(res))
  }

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => this._checkResponse(res))
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
    }).then(this._checkResponse).then((res) => res);
  }

  updateUserInfo(items) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: items.name,
        email: items.email
      }),
    }).then(res => this._checkResponse(res));
  }

  getMovies() {
    return fetch(`${this._baseUrl}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => this._checkResponse(res));
  }


  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      credentials: 'include',
    })
      .then((res) => this._checkResponse(res));
  }

handleLike = (movie) => {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co/beatfilm-movies' + movie.image.formats.thumbnail.hash + movie.image.formats.thumbnail.ext,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
      .then((res) => this._checkResponse(res));
  }

  deleteMovie = (_id) => {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => this._checkResponse(res));
  }
}

const mainApi = new MainApi({
  // baseUrl: "https://api.diploma.usynin.nomoredomains.rocks",
  baseUrl: "http://localhost:3000",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default mainApi;
