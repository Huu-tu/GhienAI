import { useState } from "react"
import ModalDocItem from './ModalDocItem'
interface Document {
  id: string
  name: string
  type: string
  size: string
  modified: string
  icon: string
}

const SAMPLE_DOCUMENTS: Document[] = [
  {
    id: "1",
    name: "Project Proposal.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "Dec 1, 2024",
    icon: "📄",
  },
  {
    id: "2",
    name: "Q4 Budget Review.xlsx",
    type: "Excel",
    size: "1.8 MB",
    modified: "Nov 28, 2024",
    icon: "📊",
  },
  {
    id: "3",
    name: "Team Presentation.pptx",
    type: "PowerPoint",
    size: "5.2 MB",
    modified: "Nov 25, 2024",
    icon: "📑",
  },
  {
    id: "4",
    name: "Design System v2.figma",
    type: "Figma",
    size: "12.5 MB",
    modified: "Nov 20, 2024",
    icon: "🎨",
  },
  {
    id: "5",
    name: "Contract 2024.docx",
    type: "Word",
    size: "856 KB",
    modified: "Nov 18, 2024",
    icon: "📝",
  },
  {
    id: "6",
    name: "Marketing Assets.zip",
    type: "Archive",
    size: "45.3 MB",
    modified: "Nov 15, 2024",
    icon: "📦",
  },
]
const ModalListDoc = () =>{
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("modified")

  const filteredDocuments = SAMPLE_DOCUMENTS.filter((doc) => doc.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortBy === "size") {
      return Number.parseFloat(b.size) - Number.parseFloat(a.size)
    }
    return 0
  })
  return(
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="space-y-1 rounded-lg border border-border bg-card overflow-hidden">
        <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-6 py-3 border-b border-border bg-muted">
          <div className="col-span-6 text-sm font-semibold text-muted-foreground">Name</div>
          <div className="col-span-2 text-sm font-semibold text-muted-foreground">Size</div>
          <div className="col-span-4 text-sm font-semibold text-muted-foreground">Modified</div>
        </div>

        {sortedDocuments.length > 0 ? (
          sortedDocuments.map((doc) => <ModalDocItem key={doc.id} document={doc} />)
        ) : (
          <div className="px-6 py-12 text-center">
            <p className="text-muted-foreground">No documents found matching your search.</p>
          </div>
        )}
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        Showing {sortedDocuments.length} of {SAMPLE_DOCUMENTS.length} documents
      </div>
    </div>  )
}

export default ModalListDoc