import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from './redux/authreducer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './Privateroute';
import { useEffect } from 'react';
import Home from './Home';
import About from './About';

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const login = () => {
    localStorage.setItem("loginuser", 'true');
    dispatch(loginuser({ type: 'LOGIN' }))
  }

    if (localStorage.getItem("loginuser")) {
      dispatch(loginuser({ type: 'LOGIN' }))
    }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home login={login} />}>
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={'/about'} element={
              <About />
            }>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <br />
      {isAuthenticated ? 'user login' : 'user not login'}

    </>
  );
}

export default App;
