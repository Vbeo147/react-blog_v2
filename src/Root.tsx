import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { useAppDispatch, useAppSelector } from "./modules/rootReducer";
import { getAuthThunk } from "./modules/auth/authReducer";
import { getGithubProfileThunk } from "./modules/auth/githubReducer";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { BlogSnapThunk } from "./modules/data/blogReducer";
import { CategorySnapThunk } from "./modules/data/categoryReducer";

function Root() {
  const dispatch = useAppDispatch();
  const {
    authReducer: { auth },
    githubReducer: { github },
  } = useAppSelector((state) => state);
  useEffect(() => {
    dispatch(getAuthThunk());
    dispatch(BlogSnapThunk());
    dispatch(CategorySnapThunk());
    window.document.body.querySelectorAll("input").forEach((node) => {
      node.setAttribute("autoComplete", "off");
      node.setAttribute("spellcheck", "false");
    });
  }, []);
  useEffect(() => {
    dispatch(getGithubProfileThunk(auth.data?.providerData[0]?.uid as string));
  }, [auth.data]);
  return (
    <div>
      {auth.loading || github.loading ? (
        <div className="root-loading">Initializing...</div>
      ) : (
        <>
          <Menu />
          <div className="root-flex">
            <div className="root-side-width">
              <Sidebar />
            </div>
            <div className="root-outlet-width">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Root;
