import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./rootReducer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./components/Router";
import "./index.css";

const router = createBrowserRouter(routes, { basename: "/react-blog_v2/" });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
