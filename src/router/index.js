import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Artcle from "@/pages/Artcle";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/artcle",
        element: <Artcle />,
      },
      {
        path: "/publish",
        element: <Publish />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
