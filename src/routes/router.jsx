import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home"
import Root from "../layouts/Root"
import ErrorPage from './../error/ErrorPage';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';

import DashboardLayout from "../layouts/DashboardLayout";
import AllUsers from "../pages/dashboard/AllUsers";
import AllArticlesAdmin from '../pages/dashboard/AllArticlesAdmin';

import AddPublisher from './../pages/dashboard/AddPublisher';
import Statistics from "../pages/dashboard/Statistics";
import AddArticles from './../pages/AddArticles';
import AllArticles from './../pages/AllArticles';
import Subscription from './../pages/Subscription';
import MyArticles from './../pages/MyArticles';
import PremiumArticles from './../pages/PremiumArticles';
import UserProfile from './../pages/UserProfile';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/add-article',
        element: <AddArticles />,
      },
      {
        path: '/all-articles',
        element: <AllArticles />,
      },
      {
        path: '/subscription',
        element: <Subscription />,
      },
      {
        path: '/my-articles',
        element: <MyArticles />,
      },
      {
        path: '/premium-articles',
        element: <PremiumArticles />,
      },
      {
        path: '/profile',
        element: <UserProfile />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: 'all-users',
        element: <AllUsers />,
      },
      {
        path: 'all-articles-admin',
        element: <AllArticlesAdmin />,
      },
      {
        path: 'add-publisher',
        element: <AddPublisher />,
      },
    ],
  },
]);


export default router