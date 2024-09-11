import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home"
import Root from "../layouts/Root"
import ErrorPage from './../error/ErrorPage';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';
import DashboardLayout from "../layouts/DashboardLayout";


const router = createBrowserRouter([
  {
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
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: <Statistics />,
    //   },
    //   {
    //     path: 'all-users',
    //     element: <AddRoom />,
    //   },
    //   {
    //     path: 'all-articles',
    //     element: <MyListings />,
    //   },
    //   {
    //     path: 'all-publishers',
    //     element: <MyListings />,
    //   },
    // ],
  }
])


export default router