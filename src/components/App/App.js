import React, { useState, useEffect } from 'react';
import { 
  // BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import PopupTooltip from "../PopupTooltip/PopupTooltip";
import Profile from '../Profile/Profile.js'
import Login from '../Login/Login.js'
import Register from '../Register/Register.js'
import Error from '../Error/Error.js'
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoutes from '../ProtectedRoute/ProtectedRoutes';
import Preloader from '../Preloader/Preloader';

import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isPopupTooltipOpen, setIsPopupTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [tokenCheck, setTokenCheck] = useState(false);
  const [loading, setLoading] = useState(false);

    // получаем данные пользователя
    useEffect(() => {
      if (isLoggedIn) {
        mainApi.getUserInfo()
          .then((data) => setCurrentUser(data))
          .catch(error => console.log(error));
      }
    }, [isLoggedIn]);

    // если есть в localStorage есть id пользователя, запрашиваем токен
    useEffect(() => {
      const userId = localStorage.getItem('_id');
      if (userId) {
        setLoading(true)
        setTokenCheck(true)
        mainApi
          .checkToken(userId)
          .then((res) => {
            if (res) {
              setIsLoggedIn(true);
            }
          })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
      }
    }, []);


    const onLogin = (data) => {
      mainApi
        .authorize(data)
        .then((res) => {
          if (res._id) {
            localStorage.setItem('_id', res._id);
            setIsLoggedIn(true);
            setIsPopupTooltipOpen(true);
            setTooltipMessage(`Вы успешно вошли в систему!`);
          };
        })
        .catch(err => {
          if (err) {
            setIsPopupTooltipOpen(true);
            setTooltipMessage("Неправильный e-mail или пароль");
          }
        })
    };

    const onRegister = (data) => {
      mainApi
        .register(data)
        .then(res => {
          if (res) {
            onLogin(data);
            setIsPopupTooltipOpen(true);
            setTooltipMessage(`Регистрация прошла успешно!`);
          }
        })
        .catch(err => {
          if (err) {
            setIsPopupTooltipOpen(true);
            setTooltipMessage("Пользователь с таким email уже зарегистрирован");
          }
          else {
            setTooltipMessage(`Ошибка регистрации: ${err}`);
          }
        });
    };

    const onUpdateUser = (items) => {
      mainApi.updateUserInfo(items)
        .then((data) => {
          setCurrentUser(data);
          setIsPopupTooltipOpen(true);
          setTooltipMessage("Профиль успешно обновлён!")

        })
        .catch((err) => {
          if (err) {
            setIsPopupTooltipOpen(true);
            setTooltipMessage("Ошибка! Данный e-mail уже используется")
          }
        });
    };

    const signOut = () => {
      mainApi.signOut()
        .then(() => {
          localStorage.clear();
          setIsLoggedIn(false);
          setCurrentUser({});
          setIsPopupTooltipOpen(true);
          setTooltipMessage("Вы успешно вышли из системы!");
        })
        .catch(() => {
          setIsPopupTooltipOpen(true);
          setTooltipMessage("На сервере произошла ошибка!")
        });
    }

    const closeTooltip = () => {
      setIsPopupTooltipOpen(!isPopupTooltipOpen);
    }

    if (loading) {
      return <Preloader />;
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {/* <Router> */}
        <Routes>
          <Route path="/"
            element={<Main 
              isLoggedIn={isLoggedIn}
              />}
          />
          {tokenCheck && (
            <>
              <Route path={"/movies"}
                element={
                  <ProtectedRoutes path="/movies"
                    isLoggedIn={isLoggedIn}
                    component={Movies}
                  />
                }
              />s
              <Route path={"/saved-movies"}
                element={
                  <ProtectedRoutes path="/saved-movies"
                    isLoggedIn={isLoggedIn}
                    component={SavedMovies}
                  />
                }
              />
              <Route path={"/profile"}
                element={
                  <ProtectedRoutes path="/profile"
                    component={Profile}
                    logOut={signOut}
                    changeProfile={onUpdateUser}
                    isLoading={false}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
            </>
          )}
          <Route path="/signin"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                onLogin={onLogin}
                isLoading={false}
              />}
          />
          <Route path="/signup"
            element={<Register
              isLoggedIn={isLoggedIn}
              onRegister={onRegister}
              isLoading={false}
            />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        {isPopupTooltipOpen && <PopupTooltip
          isOpen={isPopupTooltipOpen}
          tooltipMessage={tooltipMessage}
          onClick={closeTooltip}
        />}
        {/* </Router> */}
    </CurrentUserContext.Provider>
  );
}

export default App;
