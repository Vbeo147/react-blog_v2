import { useAppSelector } from "../modules/rootReducer";
import { useNavigate, useParams } from "react-router-dom";
import Paginate from "../components/Paginate";

function Home() {
  const { blogReducer } = useAppSelector((state) => state);
  const { page } = useParams();
  return (
    <Paginate
      itemsPerPage={1}
      items={blogReducer.blog ?? []}
      page={page ? parseInt(page) : 1}
    />
  );
}

export default Home;
