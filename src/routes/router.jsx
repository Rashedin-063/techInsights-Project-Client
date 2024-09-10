import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home"
import Root from "../layouts/Root"
import ErrorPage from './../error/ErrorPage';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';


const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage/>,
  children: [
    {
    path: '/',
    element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ]
}])


export default router