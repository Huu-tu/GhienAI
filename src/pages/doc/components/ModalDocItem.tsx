import { useState } from "react"

interface Document {
  id: string
  name: string
  type: string
  size: string
  modified: string
  icon: string
}
const ModalDocItem = ({ document }: { document: Document })=>{
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="grid grid-cols-1 gap-4 px-6 py-4 border-b border-border hover:bg-muted transition sm:grid-cols-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="col-span-1 sm:col-span-6 flex items-center gap-3">
        <span className="text-xl">{document.icon}</span>
        <div className="min-w-0">
          <p className="font-medium text-foreground truncate">{document.name}</p>
          <p className="text-xs text-muted-foreground">{document.type}</p>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 flex items-center">
        <span className="text-sm text-muted-foreground">{document.size}</span>
      </div>
      <div className="col-span-1 sm:col-span-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{document.modified}</span>
        {isHovered && <button className="text-xs font-medium text-primary hover:underline">Download</button>}
      </div>
    </div>
  )
}

export default ModalDocItem