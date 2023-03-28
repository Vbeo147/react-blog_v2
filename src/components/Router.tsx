import { RouteObject, redirect } from "react-router-dom";
import Root from "../Root";
import Home from "../routes/Home";
import Blog from "../routes/Blog";
import Write from "../routes/Write";
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
