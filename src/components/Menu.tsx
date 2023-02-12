import { Link } from "react-router-dom";
import { LogoutAuth, LoginAuth } from "../modules/AuthReducer";
import { useAppDispatch, useAppSelector } from "../rootReducer";
import { AuthSelector } from "../interfaces/AuthTypes";

function Menu() {
  const dispatch = useAppDispatch();
  const {
    AuthReducer: { auth, github },
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
        <span style={{ marginRight: "12px" }}>{github?.login}</span>
        {github?.avatar_url && auth?.photoURL ? (
          <img
            className="menu-img"
            src={github.avatar_url || auth.photoURL || ""}
            alt=""
          />
        ) : null}
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
