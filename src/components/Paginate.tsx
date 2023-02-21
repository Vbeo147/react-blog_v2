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
  const [itemOffset, setItemOffset] = useState(page - 1);
  const navigate = useNavigate();
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    navigate(`/page/${itemOffset + 1}`);
  }, [itemOffset]);
  return (
    <>
      {currentItems.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        forcePage={pageCount - 1}
      />
    </>
  );
}

export default Paginate;
