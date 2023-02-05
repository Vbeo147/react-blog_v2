import { Link } from "react-router-dom";
import { LoginAuth, LogoutAuth, onAuthChanged } from "../modules/AuthReducer";
import { useAppDispatch, useAppSelector } from "../rootReducer";
import { AuthSelector } from "../interface/AuthTypes";

function Menu() {
  const dispatch = useAppDispatch();
  const {
    AuthReducer: { auth },
  } = useAppSelector<AuthSelector>((state) => state);
  const onLogClick = () => {
    if (auth) {
      dispatch(LogoutAuth());
    } else {
      dispatch(LoginAuth());
    }
  };
  return (
    <div className="menu-flex">
      <div className="menu-login-flex">
        {auth?.photoURL && (
          <img className="menu-img" src={auth?.photoURL} alt="" />
        )}
        <button onClick={onLogClick} style={{ cursor: "pointer" }}>
          {auth ? "Log Out" : "Log In"}
        </button>
      </div>
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
