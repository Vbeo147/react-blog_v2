import { useParams } from "react-router-dom";
import { useAppSelector } from "../modules/rootReducer";
import { blogType } from "../modules/types/blogTypes";
import DOMPurify from "dompurify";

type findType = blogType | undefined;

function Blog() {
  const { id } = useParams();
  const { blog, loading } = useAppSelector((state) => state.blogReducer);
  const findBlog: findType = blog?.find(
    (currentItem) => currentItem.id === id
  ) as findType;
  if (findBlog) {
    return (
      <>
        {!loading ? (
          <div>
            <h1>{findBlog.title}</h1>
            <div>
              <span>{findBlog.time.createdAt}</span>
              &nbsp;&nbsp;
              <span>
                {findBlog.time.updated ? "업데이트됨" : "업데이트안됨"}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(findBlog.content),
              }}
            />
          </div>
        ) : (
          <div>Loading..</div>
        )}
      </>
    );
  } else {
    return <div>블로그 데이터를 찾을 수 없습니다</div>;
  }
}

export default Blog;
