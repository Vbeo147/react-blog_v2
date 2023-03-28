import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../modules/rootReducer";
import { findBlog } from "../lib/blogUtils";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import { dbService } from "../firebase";
import { useCheckAdmin } from "../hooks/useCheckAdmin";

function Blog() {
  const { id } = useParams();
  const { blog, loading } = useAppSelector((state) => state.blogReducer);
  const currentBlog = findBlog(blog, id);
  const PrevPage = localStorage.getItem("page");
  const navigate = useNavigate();
  const isAdmin = useCheckAdmin();
  const onClick = (nav: string) => {
    navigate(nav);
  };
  const onDelete = async (deleteId: string) => {
    const check = window.confirm("해당 블로그를 삭제합니다");
    if (check) {
      await dbService.doc(`blog/${deleteId}`).delete();
      navigate("/");
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [window.history.state]);
  if (currentBlog) {
    const timestamp = new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    return (
      <>
        {!loading ? (
          <div
            className="blog-flex"
            onWheel={(e) => {
              const y = e.deltaY;
              if (e.pageY >= 800) {
                const el = document.querySelector(
                  ".blog-btn"
                ) as HTMLDivElement;
                el.style.opacity = y > 0 ? "0" : "1";
                el.style.visibility = y > 0 ? "hidden" : "visible";
              }
            }}
          >
            <div className="blog-title">
              <h1 className="root-overflow">{currentBlog.title}</h1>
              <div className="blog-time">
                <span>{timestamp.format(currentBlog.time.updatedAt)}</span>
                {currentBlog.time.updated && <span>( 수정됨 )</span>}
              </div>
            </div>
            <div className="blog-btn">
              {isAdmin && (
                <>
                  <button onClick={() => onClick(`/write/${id}`)}>수정</button>
                  <button onClick={() => onDelete(id as string)}>삭제</button>
                </>
              )}
              <button onClick={() => onClick(`/page/${PrevPage}`)}>
                이전 페이지
              </button>
            </div>
            <div
              className="blog-inner ck-content"
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
