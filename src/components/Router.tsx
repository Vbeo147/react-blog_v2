import Root from "../Root";
import Home from "../routes/Home";
import Write from "../routes/Write";
import { RouteObject, redirect } from "react-router-dom";
import Category from "../routes/Category";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "write", element: <Write /> },
      {
        path: "write/:id",
        element: <Write />,
      },
      {
        path: "page/:page",
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
    ],
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
];
