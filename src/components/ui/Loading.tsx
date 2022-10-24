import React from 'react'

interface LoaderProps {
  style?: string
}
const Loader: React.FC<LoaderProps> = ({style}) => {
  return <div className={`dotted-loader ${style ? style : 'default-loader'} `}></div>
}

export default Loader
