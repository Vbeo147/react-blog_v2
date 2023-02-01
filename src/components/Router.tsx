import Root from "../Root";
import Home from "../routes/Home";
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
    ],
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
];
