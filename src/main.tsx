import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./modules/rootReducer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./components/Router";
import { RecoilRoot } from "recoil";
import "./index.css";

const router = createBrowserRouter(routes, { basename: "/react-blog_v2/" });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </RecoilRoot>
);
