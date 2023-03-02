import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../modules/rootReducer";
import { LoginAuthThunk } from "../modules/auth/authReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useMatch } from "react-router-dom";
import { motion } from "framer-motion";

function Menu() {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state.authReducer);
  const { github } = useAppSelector((state) => state.githubReducer);
  const HomeMatch = useMatch("/");
  const WriteMatch = useMatch("/write");
  const TagMatch = useMatch("/tag");
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
        <div className="menu-profile-flex">
          {github.data?.avatar_url ? (
            <img
              className="menu-img"
              src={github.data.avatar_url || ""}
              alt=""
            />
          ) : null}
          <span>{github.data?.login}</span>
        </div>
        <div>
          <button className="menu-login-btn" onClick={onLogClick}>
            {auth.data ? (
              <FontAwesomeIcon icon={faRightFromBracket} />
            ) : (
              "LogIn"
            )}
          </button>
        </div>
      </div>
      <div className="menu-btn-flex">
        <motion.button
          whileHover={{ borderBottom: !HomeMatch ? "1px solid black" : "" }}
        >
          <Link className={HomeMatch ? "menu-btn-active" : ""} to={"/"}>
            Home
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ borderBottom: !WriteMatch ? "1px solid black" : "" }}
        >
          <Link className={WriteMatch ? "menu-btn-active" : ""} to={"/write"}>
            Write
          </Link>
        </motion.button>
        <motion.button
          whileHover={{ borderBottom: !TagMatch ? "1px solid black" : "" }}
        >
          <Link className={TagMatch ? "menu-btn-active" : ""} to={"/tag"}>
            tag
          </Link>
        </motion.button>
      </div>
    </div>
  );
}

export default Menu;
