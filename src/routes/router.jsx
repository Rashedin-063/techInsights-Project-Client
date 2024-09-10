import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home"
import Root from "../layouts/Root"
import ErrorPage from './../error/ErrorPage';


const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage/>,
  children: [{
    path: '/',
    element: <Home/>
  }]
}])


export default router