import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../modules/rootReducer";
import { motion, AnimatePresence } from "framer-motion";

function Category() {
  const [category, setCategory] = useState<string[]>([]);
  const { categoryReducer, blogReducer } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    if (e.currentTarget.className === "category-active") {
      e.currentTarget.classList.remove("category-active");
      setCategory((prev) => prev.filter((item) => item !== id));
    } else {
      e.currentTarget.classList.add("category-active");
      setCategory((prev) => [...prev, id]);
    }
  };
  const onCurrentClick = (id: string) => {
    navigate(`/blog/${id}`);
  };
  return (
    <>
      {!categoryReducer.loading ? (
        <>
          <ul className="category-flex">
            {categoryReducer.categories?.map((item) => (
              <li onClick={(e) => onClick(e, item.id)} key={item.id}>
                <span>{item.id}</span>
              </li>
            ))}
          </ul>
          <div className="category-current">
            <AnimatePresence>
              {category.map((id) =>
                blogReducer.blog
                  ?.map((item) => item)
                  .filter((current) => current.tag === id)
                  .map((currentBlog) => (
                    <motion.div
                      initial={{ opacity: 0, x: -300 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        duration: 0.4,
                      }}
                      exit={{ opacity: 0, x: -300 }}
                      onClick={() => onCurrentClick(currentBlog.id)}
                      key={currentBlog.id}
                    >
                      <span>[ {currentBlog.tag} ]</span>
                      <span>{currentBlog.title}</span>
                    </motion.div>
                  ))
              )}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Category;
