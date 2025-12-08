import {  Document } from 'types/index'
import { useFormatSize } from 'hooks'

const ModalDocItem = ({ document }: { document: Document })=>{
  const { formatSize } = useFormatSize();

  return (
    <div className="grid grid-cols-1 gap-4 px-6 py-4 border-b border-border hover:bg-muted transition sm:grid-cols-12">
      <div className="col-span-1 sm:col-span-6 flex items-center gap-3">
        {/*<span className="text-xl">{document.icon}</span>*/}
        <div className="min-w-0">
          <p className="font-medium text-foreground truncate">{document.name}</p>
          {/*<p className="text-xs text-muted-foreground">{document.fileType}</p>*/}
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 flex items-center">
        <span className="text-sm text-muted-foreground">{formatSize(document.fileSize)}</span>
      </div>
      <div className="col-span-1 sm:col-span-4 flex items-center justify-between">
         <a
           href={`${import.meta.env.VITE_BASE_API_URL}/file/${document.fileUrl}`}
           download={document.name}
           // onClick={() => download({
           //   url: document.fileUrl,
           //   filename: document.name })}
           className="text-xs font-medium  hover:underline">Download</a>
      </div>
    </div>
  )
}

export default ModalDocItem