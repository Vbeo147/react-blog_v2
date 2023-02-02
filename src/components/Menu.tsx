import { Link } from "react-router-dom";
import { LoginAuth, LogoutAuth, onAuthChanged } from "../modules/AuthReducer";
import { useAppDispatch, useAppSelector } from "../rootReducer";
import { ISelector } from "../interface/AuthTypes";

function Menu() {
  const dispatch = useAppDispatch();
  const {
    AuthReducer: {
      github: { auth },
    },
  } = useAppSelector<ISelector>((state) => state);
  const onLogClick = () => {
    if (auth) {
      dispatch(LogoutAuth());
    } else {
      dispatch(LoginAuth());
    }
  };
  return (
    <div className="menu-flex">
      <button onClick={onLogClick}>{auth ? "Log Out" : "Log In"}</button>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"/write"}>Write</Link>
      </button>
    </div>
  );
}

export default Menu;
