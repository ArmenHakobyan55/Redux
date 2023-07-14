import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import { Comments, Home, Photo, Photos } from "../Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "Comments",
    element: <Comments/>,
  },
  {
    path: "Photos",
    element: <Photos/>
  }, 
  {
    path: "Photos/:id",
    element: <Photo/>
  }, 
])