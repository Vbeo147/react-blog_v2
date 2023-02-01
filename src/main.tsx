import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import ReduxThunk from "redux-thunk";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./components/Router";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const router = createBrowserRouter(routes, { basename: "/react-blog_v2/" });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
