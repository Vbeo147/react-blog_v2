import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { useAppDispatch, useAppSelector } from "./rootReducer";
import { useEffect } from "react";
import { onAuthChanged } from "./modules/AuthReducer";
import { AuthSelector } from "./interface/AuthTypes";

function Root() {
  const dispatch = useAppDispatch();
  const { AuthReducer } = useAppSelector<AuthSelector>((state) => state);
  useEffect(() => {
    dispatch(onAuthChanged());
  }, []);
  return (
    <div>
      {AuthReducer.github.loading ? (
        "Loading..."
      ) : (
        <>
          <Menu />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default Root;
