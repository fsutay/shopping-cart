import {useRoutes } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import About from "../pages/about";


export default function Router() {
    return useRoutes([
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ])
  }