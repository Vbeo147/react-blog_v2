import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { useAppDispatch, useAppSelector } from "./rootReducer";
import { useEffect } from "react";
import { onAuthChanged } from "./modules/AuthReducer";
import { AuthSelector } from "./interfaces/AuthTypes";
import Sidebar from "./components/Sidebar";

function Root() {
  const dispatch = useAppDispatch();
  const {
    AuthReducer: { loading, github },
  } = useAppSelector<AuthSelector>((state) => state);
  useEffect(() => {
    dispatch(onAuthChanged());
  }, []);
  return (
    <div>
      {loading ? (
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
