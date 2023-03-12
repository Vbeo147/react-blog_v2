import { useAppSelector } from "../modules/rootReducer";
import Paginate from "../components/Paginate";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo, useRef, useTransition } from "react";
import { blogType } from "../modules/types/blogTypes";

function Home() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [isPending, SearchTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const { blog, loading } = useAppSelector((state) => state.blogReducer);
  const { page } = useParams();
  const navigate = useNavigate();
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    SearchTransition(() => setSearch(e.target.value));
  };
  const onReset = () => {
    setSearch("");
    inputRef.current?.focus();
  };
  const SearchItems = useMemo(
    () =>
      blog
        ?.sort((a, b) => {
          const updatedAt = (param: blogType) => param.time.updatedAt;
          return sort
            ? updatedAt(a) - updatedAt(b)
            : updatedAt(b) - updatedAt(a);
        })
        .filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        ),
    [search, sort, blog]
  );
  useEffect(() => {
    if (Number.isNaN(parseInt(page as string))) navigate("/");
    localStorage.setItem("page", page ?? "1");
  }, [page]);
  return (
    <>
      {!loading ? (
        <>
          <div className="home-flex">
            <input
              value={search}
              onChange={onSearch}
              type="text"
              ref={inputRef}
              placeholder="Search..."
            />
            <button type="reset" onClick={onReset}>
              X
            </button>
            <button type="button" onClick={() => setSort((prev) => !prev)}>
              {sort ? "오래된순" : "최신순"}
            </button>
          </div>
          <Paginate
            itemsPerPage={5}
            items={SearchItems as blogType[]}
            page={parseInt(page ?? "1")}
          />
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default Home;
