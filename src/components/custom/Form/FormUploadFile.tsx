import { useState, useRef } from "react"
import { Upload, X, File, CheckCircle2 } from "lucide-react"

import {UploadFile} from 'types/index'

const  FormUploadFile = ({onUpload}: {onUpload: (files: File[])=> void }) =>{
  const [files, setFiles] = useState<UploadFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    processFiles(droppedFiles)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      processFiles(selectedFiles)
    }
  }

  const processFiles = (fileList: File[]) => {
    const newFiles = fileList.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      progress: 0,
      status: "uploading" as const,
      file: file,   // ⬅️ Lưu File thật
    }))

    setFiles(prev => [...prev, ...newFiles])

    // Fake progress
    newFiles.forEach((fileItem) => {
      let progress = 0
      const interval = setInterval(() => {
        progress += Math.random() * 30

        setFiles(prev =>
          prev.map(f =>
            f.id === fileItem.id
              ? {
                ...f,
                progress: Math.min(100, Math.floor(progress)),
                status: progress >= 100 ? "success" : "uploading"
              }
              : f
          )
        )

        if (progress >= 100) clearInterval(interval)
      }, 200)
    })
  }

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative rounded-2xl border-2 border-dashed transition-all duration-200 p-12 text-center cursor-pointer ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border bg-muted/30 hover:border-primary/50 hover:bg-primary/2"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          aria-label="Upload files"
        />

        <button onClick={() => fileInputRef.current?.click()} className="flex flex-col items-center gap-3 w-full">
          <div className="p-3 rounded-full bg-primary/10">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">Drag and drop your files here</p>
            <p className="text-sm text-muted-foreground mt-1">or click to browse from your computer</p>
          </div>
        </button>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-8 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Uploaded Files</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
              >
                <File className="w-5 h-5 text-muted-foreground flex-shrink-0" />

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                </div>

                {file.status === "uploading" && (
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-1.5 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full  transition-all duration-300"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium w-8">{file.progress}%</span>
                  </div>
                )}

                {file.status === "success" && <CheckCircle2 className="w-5 h-5  flex-shrink-0" />}

                <button
                  onClick={() => removeFile(file.id)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      {files.length > 0 && (
        <div className="mt-8 flex gap-3 justify-end">
          <button
            onClick={() => setFiles([])}
            className="px-6 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={() => onUpload(files.map(f => f.file))}
            className="px-6 py-2.5 rounded-lg  text-primary-foreground font-medium  transition-colors">
            Upload
          </button>
        </div>
      )}
    </div>

  )
}

export default FormUploadFile