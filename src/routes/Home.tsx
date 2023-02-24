import { useAppSelector } from "../modules/rootReducer";
import Paginate from "../components/Paginate";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { blogType } from "../modules/types/blogTypes";

function Home() {
  const { blogReducer } = useAppSelector((state) => state);
  const { page } = useParams();
  const navigate = useNavigate();
  console.log("Home render");
  useEffect(() => {
    if (Number.isNaN(parseInt(page as string))) navigate("/");
    localStorage.setItem("page", page ?? "1");
  }, [page]);
  return (
    <>
      {!blogReducer.loading && (
        <Paginate
          itemsPerPage={1}
          items={blogReducer.blog as blogType[]}
          page={parseInt(page ?? "1")}
        />
      )}
    </>
  );
}

export default Home;
