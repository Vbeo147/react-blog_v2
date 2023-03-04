import Root from "../Root";
import Home from "../routes/Home";
import Write from "../routes/Write";
import { RouteObject, redirect } from "react-router-dom";
import Category from "../routes/Category";
import Blog from "../routes/Blog";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "page/:page",
        element: <Home />,
      },
      {
        path: "blog/:id",
        element: <Blog />,
      },
      { path: "write", element: <Write /> },
      {
        path: "write/:id",
        element: <Write />,
      },
      {
        path: "tag",
        element: <Category />,
      },
    ],
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
];
