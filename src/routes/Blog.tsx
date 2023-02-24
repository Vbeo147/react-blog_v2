import { useParams } from "react-router-dom";
import { useAppSelector } from "../modules/rootReducer";
import { findBlog } from "../lib/blogUtils";
import DOMPurify from "dompurify";
import { blogType } from "../modules/types/blogTypes";

function Blog() {
  const { id } = useParams();
  const { blog, loading } = useAppSelector((state) => state.blogReducer);
  const currentBlog = findBlog(blog, id);
  if (currentBlog) {
    return (
      <>
        {!loading ? (
          <div>
            <h1>{currentBlog.title}</h1>
            <div>
              <span>{currentBlog.time.createdAt}</span>
              &nbsp;&nbsp;
              <span>
                {currentBlog.time.updated ? "업데이트됨" : "업데이트안됨"}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(currentBlog.content),
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
