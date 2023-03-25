import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dbService } from "../firebase";
import { useAppSelector } from "../modules/rootReducer";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { filterBlog } from "../lib/blogUtils";

function Sidebar() {
  const [value, setValue] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const { categoryReducer, blogReducer } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dbService.doc(`categories/${value}`).set({});
    setValue("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClick = (id: string) => {
    navigate(`/blog/${id}`);
  };
  const onOpen = () => setOpen((prev) => !prev);
  const onDelete = async (id: string) => {
    const check = window.confirm(
      "해당 태그를 삭제할 시 소속된 블로그도 모두 삭제됩니다."
    );
    if (check) {
      filterBlog(blogReducer.blog, id).forEach(async (currentItem) => {
        await dbService.doc(`blog/${currentItem.id}`).delete();
      });
      await dbService.doc(`categories/${id}`).delete();
    }
  };
  const SideWidth =
    (document.querySelector(".side-flex")?.getBoundingClientRect()
      .width as number) ?? 0;
  const SlideVariants: Variants = {
    initial: {
      x: -999,
    },
    animate: (Open: boolean) => ({
      x: Open ? 0 : -SideWidth,
      transition: {
        type: "tween",
        duration: 0.36,
      },
    }),
  };
  useEffect(() => {
    const delay = 300;
    let isOverWidth: boolean = window.innerWidth >= 1300;
    let timer: NodeJS.Timeout;
    setOpen(isOverWidth);
    setVisible(!isOverWidth);
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        isOverWidth = window.innerWidth >= 1300;
        setOpen(isOverWidth);
        setVisible(!isOverWidth);
      }, delay);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <>
      <motion.div
        id="dummy-fixed"
        transition={{
          type: "tween",
          duration: 0.36,
        }}
        animate={{
          marginRight: isOpen ? SideWidth : 0,
        }}
        style={{
          position: isVisible ? "fixed" : "relative",
        }}
      ></motion.div>
      <motion.div
        className="side-openBtn"
        variants={SlideVariants}
        initial="initial"
        animate="animate"
        custom={isOpen}
        onClick={onOpen}
        style={{
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
      </motion.div>
      <motion.div
        className="side-flex"
        variants={SlideVariants}
        initial="initial"
        animate="animate"
        custom={isOpen}
        style={{
          boxShadow: isOpen ? "1px 1px 8px 1px black" : "",
        }}
      >
        <form onSubmit={onSubmit} className="side-form-flex">
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Category..."
            maxLength={15}
            minLength={3}
          />
        </form>
        <div className="side-tag-flex">
          {categoryReducer.categories?.map((item, index) => {
            const currentBlog = filterBlog(blogReducer.blog, item.id);
            return (
              <details key={index}>
                <summary className="side-summary">
                  <span>{`${item.id} (${currentBlog.length})`}</span>
                  <button onClick={() => onDelete(item.id)}>X</button>
                </summary>
                <ul className="side-list">
                  {currentBlog.map((blog) => (
                    <li
                      onClick={() => onClick(blog.id)}
                      title={blog.title}
                      key={blog.id}
                    >
                      {blog.title}
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
