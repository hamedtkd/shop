
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { useAuth } from './hooks/useAuth';
import Cookies from 'js-cookie';
// import { BASE_INSTANCE } from "@/api/constant"
import { useEffect } from 'react';
import { BASE_INSTANCE } from './api/constant';
// import { BASE_INSTANCE } from 'api/constant';

function App() {
const token = Cookies.get('token')
useEffect(() => {
   if (token){
    BASE_INSTANCE.defaults.headers.common['Authorization'] = token
   }
}, [token]);
  return (
    <>
      {useAuth()}
      <Routes>
        {Object.keys(routes).map((route) => {
          return (
            <Route
              key={routes[route].path}
              element={routes[route].element}
              path={routes[route].path}
            />
          );
        })}
      </Routes>
    </>
  )
}

export default App
