import Root from "../Root";
import Home from "../routes/Home";
import Write from "../routes/Write";
import { RouteObject, redirect } from "react-router-dom";

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
    ],
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
];
