import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { useAppDispatch, useAppSelector } from "./rootReducer";
import { useEffect } from "react";
import { onAuthChanged } from "./modules/AuthReducer";
import { AuthSelector } from "./interface/AuthTypes";
import Sidebar from "./components/Sidebar";

function Root() {
  const dispatch = useAppDispatch();
  const {
    AuthReducer: { loading },
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
            <Sidebar />
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}

export default Root;
