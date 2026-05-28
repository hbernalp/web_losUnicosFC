import { useState, useRef, type DragEvent } from 'react'
import { cn } from '@/shared/lib/utils'
import { Upload, X, ImageIcon } from 'lucide-react'

interface ImageUploaderProps {
  onUpload: (file: File) => void
  preview?: string | null
  className?: string
}

export function ImageUploader({ onUpload, preview, className }: ImageUploaderProps) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file?.type.startsWith('image/')) onUpload(file)
  }

  const handleChange = () => {
    const file = inputRef.current?.files?.[0]
    if (file) onUpload(file)
  }

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-all',
        dragging ? 'border-primary-500 bg-primary-500/10' : 'border-surface-700 bg-surface-900 hover:border-surface-600',
        className,
      )}
      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      {preview ? (
        <div className="relative w-full">
          <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); inputRef.current && (inputRef.current.value = '') }}
            className="absolute top-2 right-2 p-1 rounded-full bg-black/60 text-white hover:bg-black/80 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <>
          <div className="mb-3 rounded-full bg-surface-800 p-3">
            {dragging ? <Upload className="h-6 w-6 text-primary-500" /> : <ImageIcon className="h-6 w-6 text-surface-400" />}
          </div>
          <p className="text-sm text-surface-400 text-center">
            <span className="text-primary-500 font-semibold">Click para subir</span> o arrastra y suelta
          </p>
          <p className="text-xs text-surface-500 mt-1">PNG, JPG, WebP (max 5MB)</p>
        </>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleChange} />
    </div>
  )
}
