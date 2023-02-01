import { Link } from "react-router-dom";
import { LoginAuth } from "../modules/AuthReducer";
import { useAppDispatch } from "../rootReducer";

function Menu() {
  const dispatch = useAppDispatch();
  const onLogIn = () => {
    dispatch(LoginAuth());
  };
  return (
    <div className="menu-flex">
      <button onClick={onLogIn}>Log In</button>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"/test"}>Test</Link>
      </button>
      <button>
        <Link to={"/write"}>Write</Link>
      </button>
    </div>
  );
}

export default Menu;
