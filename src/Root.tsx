import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { useAppDispatch, useAppSelector } from "./modules/rootReducer";
import { getAuthThunk } from "./modules/auth/authR";
import { getGithubProfileThunk } from "./modules/auth/githubR";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

function Root() {
  const dispatch = useAppDispatch();
  const { authR, githubR } = useAppSelector((state) => state);
  useEffect(() => {
    dispatch(getAuthThunk());
  }, []);
  useEffect(() => {
    dispatch(getGithubProfileThunk(authR.data?.providerData[0]?.uid as string));
  }, [authR.data]);
  return (
    <div>
      {authR.loading || githubR.loading ? (
        "Loading..."
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
