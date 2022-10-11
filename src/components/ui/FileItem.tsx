import React from 'react'

type FileItemProps = {
  src?: string
  alt?: string
  css?: string
}
const FileItem: React.FC<FileItemProps> = ({src, alt, css}) => {
  return (
    <div className={`mb-4 ${css ? css : 'col-md-3 '}`}>
      <div className="border border-secondary">
        <img src={src ? src : '/placeholder.jpg'} alt={alt} />
      </div>
    </div>
  )
}

export default FileItem
