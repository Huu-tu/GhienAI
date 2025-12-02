import { ChevronLeft, ChevronRight } from "lucide-react"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const siblingCount = 1

  const getPaginationItems = () => {
    const items = []
    const leftSibling = Math.max(currentPage - siblingCount, 1)
    const rightSibling = Math.min(currentPage + siblingCount, totalPages)

    items.push(1)

    if (leftSibling > 2) items.push("...")

    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== totalPages) items.push(i)
    }

    if (rightSibling < totalPages - 1) items.push("...")

    items.push(totalPages)

    return items.filter((item, index, array) =>
      !(item === "..." && array[index + 1] === "...")
    )
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Prev */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page numbers */}
      <div className="flex gap-1">
        {getPaginationItems().map((item, index) => (
          <button
            key={`${item}-${index}`}
            onClick={() => typeof item === "number" && onPageChange(item)}
            disabled={item === "..."}
            className={`px-3 py-2 rounded-lg font-medium ${
              item === currentPage
                ? "bg-blue-600 text-white"
                : item === "..."
                  ? "cursor-default text-slate-400"
                  : "border border-slate-300 hover:bg-slate-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Pagination
