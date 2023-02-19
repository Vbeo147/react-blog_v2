import { Outlet, useLocation } from "react-router-dom";
import Menu from "./components/Menu";
import { useAppDispatch, useAppSelector } from "./modules/rootReducer";
import { getAuthThunk } from "./modules/auth/authReducer";
import { getGithubProfileThunk } from "./modules/auth/githubReducer";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { BlogSnapThunk } from "./modules/auth/blogReducer";
import { useSetRecoilState } from "recoil";
import { ImageArray } from "./atoms/Image";

function Root() {
  const setImage = useSetRecoilState(ImageArray);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const {
    authReducer: { auth },
    githubReducer: { github },
  } = useAppSelector((state) => state);
  useEffect(() => {
    dispatch(getAuthThunk());
    dispatch(BlogSnapThunk());
  }, []);
  useEffect(() => {
    dispatch(getGithubProfileThunk(auth.data?.providerData[0]?.uid as string));
  }, [auth.data]);
  useEffect(() => {
    setImage([]);
  }, [location.pathname]);
  return (
    <div>
      {auth.loading || github.loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "6vh",
            fontWeight: "bold",
            height: "100vh",
          }}
        >
          Initializing...
        </div>
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
