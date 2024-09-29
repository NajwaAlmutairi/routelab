import {
  createBrowserRouter,
} from "react-router-dom";
import Info from "../pages/info";
import Register from "../pages/Register";
import App from '../App.jsx'
import ErrorPage from "../Error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/infopage",
    element: < Info/>,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
