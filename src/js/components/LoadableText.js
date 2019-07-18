import React from 'react'

const LoadableText = ({ loading, children }) =>
  loading ? <div className="loading-text" /> : <span>{children}</span>

export default LoadableText
