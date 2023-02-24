import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../modules/rootReducer";
import { LoginAuthThunk } from "../modules/auth/authReducer";

function Menu() {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state.authReducer);
  const { github } = useAppSelector((state) => state.githubReducer);
  const onLogClick = () => {
    if (auth.data) {
      dispatch(LoginAuthThunk(false));
    } else {
      dispatch(LoginAuthThunk(true));
    }
  };
  return (
    <div className="menu-flex">
      <div className="menu-login-flex">
        <span style={{ marginRight: "12px" }}>{github.data?.login}</span>
        {github.data?.avatar_url ? (
          <img className="menu-img" src={github.data.avatar_url || ""} alt="" />
        ) : null}
        <button onClick={onLogClick} style={{ cursor: "pointer" }}>
          {auth.data ? "Log Out" : "Log In"}
        </button>
      </div>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"/write"}>Write</Link>
      </button>
      <button>
        <Link to={"/category"}>Category</Link>
      </button>
    </div>
  );
}

export default Menu;
