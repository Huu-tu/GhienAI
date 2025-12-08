import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  pageCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ pageCount, onPageChange }: Props) {
  return (
    <ReactPaginate
      previousLabel={<ChevronLeft className="w-4 h-4" />}
      nextLabel={<ChevronRight className="w-4 h-4" />}
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={(event) => onPageChange(event.selected + 1)}
      containerClassName="flex items-center justify-center gap-2 mt-8"
      pageClassName="px-3 py-2 border rounded cursor-pointer"
      activeClassName="bg-blue-600 text-white"
      previousClassName="px-3 py-2 border rounded"
      nextClassName="px-3 py-2 border rounded"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  );
}
