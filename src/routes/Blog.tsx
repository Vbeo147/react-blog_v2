import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../modules/rootReducer";
import { findBlog } from "../lib/blogUtils";
import DOMPurify from "dompurify";
import { useEffect } from "react";

function Blog() {
  const { id } = useParams();
  const { blog, loading } = useAppSelector((state) => state.blogReducer);
  const currentBlog = findBlog(blog, id);
  const PrevPage = localStorage.getItem("page");
  const navigate = useNavigate();
  const onClick = (nav: string) => {
    navigate(nav);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [window.history.state]);
  if (currentBlog) {
    return (
      <>
        {!loading ? (
          <div>
            <h1>{currentBlog.title}</h1>
            <div>
              <span>{currentBlog.time.updatedAt}</span>
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
            <div>
              <button onClick={() => onClick(`/write/${id}`)}>수정</button>
              <button onClick={() => onClick(`/page/${PrevPage}`)}>
                이전 페이지
              </button>
            </div>
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
