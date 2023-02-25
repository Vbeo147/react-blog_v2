import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../modules/rootReducer";

function Category() {
  const [category, setCategory] = useState<string[]>([]);
  const { categoryReducer, blogReducer } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    if (e.currentTarget.className === "active") {
      e.currentTarget.classList.remove("active");
      setCategory((prev) => prev.filter((item) => item !== id));
    } else {
      e.currentTarget.classList.add("active");
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
          <ul>
            {categoryReducer.categories?.map((item) => (
              <li onClick={(e) => onClick(e, item.id)} key={item.id}>
                {item.id}
              </li>
            ))}
          </ul>
          {category.map((id) =>
            blogReducer.blog
              ?.map((item) => item)
              .filter((current) => current.tag === id)
              .map((currentBlog) => (
                <div
                  onClick={() => onCurrentClick(currentBlog.id)}
                  key={currentBlog.id}
                >
                  {currentBlog.title}
                </div>
              ))
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Category;
