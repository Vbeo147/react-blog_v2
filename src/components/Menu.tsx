import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../modules/rootReducer";
import { LoginAuthThunk } from "../modules/auth/authReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { useCheckAdmin } from "../hooks/useCheckAdmin";

function Menu() {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state.authReducer);
  const { github } = useAppSelector((state) => state.githubReducer);
  const isAdmin = useCheckAdmin();
  const HomeMatch = useMatch("/");
  const PageMatch = useMatch("/page/*");
  const WriteMatch = useMatch("/write/*");
  const TagMatch = useMatch("/tag");
  const Login = () => {
    if (auth.data) {
      dispatch(LoginAuthThunk(false));
    } else {
      dispatch(LoginAuthThunk(true));
    }
  };
  const onLoginClick = () => {
    Login();
  };
  const whileVariants = {
    hover: (isMatch: boolean) => {
      if (isMatch) {
        return {};
      } else {
        return {
          backgroundColor: "rgba(238, 234, 234, 0.5)",
        };
      }
    },
  };
  return (
    <div className="menu-flex">
      <div className="menu-login-flex">
        <div className="menu-profile-flex" onClick={onLoginClick}>
          <div>
            {github.data?.avatar_url ? (
              <img
                className="menu-img"
                src={github.data.avatar_url || ""}
                alt=""
              />
            ) : (
              <FontAwesomeIcon className="menu-icon" icon={faGithub} />
            )}
          </div>
          <div className="menu-name">
            <span>{github.data?.login}</span>
          </div>
        </div>
      </div>
      <div className="menu-btn-flex">
        <motion.button
          className={HomeMatch || PageMatch ? "menu-btn-active" : ""}
          variants={whileVariants}
          whileHover="hover"
          custom={HomeMatch || PageMatch}
        >
          <Link to={"/"}>Home</Link>
        </motion.button>
        {isAdmin && (
          <motion.button
            className={WriteMatch ? "menu-btn-active" : ""}
            variants={whileVariants}
            whileHover="hover"
            custom={WriteMatch}
          >
            <Link to={"/write"}>Write</Link>
          </motion.button>
        )}
        <motion.button
          className={TagMatch ? "menu-btn-active" : ""}
          variants={whileVariants}
          whileHover="hover"
          custom={TagMatch}
        >
          <Link to={"/tag"}>tag</Link>
        </motion.button>
      </div>
    </div>
  );
}

export default Menu;
