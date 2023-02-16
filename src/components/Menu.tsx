import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../modules/rootReducer";
import { LoginAuthThunk } from "../modules/auth/authR";

function Menu() {
  const dispatch = useAppDispatch();
  const {
    authR: { data: auth },
    githubR: { data: github },
  } = useAppSelector((state) => state);
  const onLogClick = () => {
    if (auth) {
      dispatch(LoginAuthThunk(false));
    } else {
      dispatch(LoginAuthThunk(true));
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
