import ReactPaginate from "react-paginate";
import { blogType } from "../modules/types/blogTypes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface PaginateProps {
  itemsPerPage: number;
  items: blogType[];
  page: number;
}

function Paginate({ itemsPerPage, items, page }: PaginateProps) {
  const [itemOffset, setItemOffset] = useState(
    ((page - 1) * itemsPerPage) % items.length
  );
  const [select, setSelect] = useState(page - 1);
  const navigate = useNavigate();
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (selectedItem: { selected: number }) => {
    const selectedValue = selectedItem.selected;
    const newOffset = (selectedValue * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setSelect(selectedValue);
  };
  const onClick = (id: string) => {
    navigate(`/blog/${id}`);
  };
  useEffect(() => {
    if (select > pageCount) return navigate("/");
    navigate(`/page/${select + 1}`);
  }, [select]);
  console.log("Paginate render");
  if (items.length > 0) {
    return (
      <div className="paginate-flex">
        <ul className="paginate-inner">
          {currentItems.map((item) => {
            const timestamp = new Intl.DateTimeFormat("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <li onClick={() => onClick(item.id)} key={item.id}>
                <div className="paginate-inner-title">
                  <span>{`[ ${item.tag} ]`}</span>
                  <span>{item.title}</span>
                </div>
                <div className="paginate-inner-time">
                  <span>{timestamp.format(item.time.updatedAt)}</span>
                  {item.time.updated && <span>( 수정됨 )</span>}
                </div>
              </li>
            );
          })}
        </ul>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          activeClassName={"test"}
          initialPage={page - 1}
        />
      </div>
    );
  } else {
    return <div>검색결과가 없습니다.</div>;
  }
}

export default Paginate;
