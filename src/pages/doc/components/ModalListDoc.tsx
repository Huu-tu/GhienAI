import {  useGetDocuments } from 'libs/hooks'

import ModalDocItem from './ModalDocItem'

const ModalListDoc = () =>{
  const { data: documents = [] } = useGetDocuments();

  return(
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="space-y-1 rounded-lg border border-border bg-card overflow-hidden">
        <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-6 py-3 border-b border-border bg-muted">
          <div className="col-span-6 text-sm font-semibold text-muted-foreground">Name</div>
          <div className="col-span-2 text-sm font-semibold text-muted-foreground">Size</div>
          <div className="col-span-4 text-sm font-semibold text-muted-foreground">Action</div>
        </div>

        {documents.map((doc) => <ModalDocItem key={doc.id} document={doc} />)}
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        Showing {documents.length} of documents
      </div>
    </div>  )
}

export default ModalListDoc