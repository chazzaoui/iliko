import React from "react"

function ContentWrapper(props) {
  return (
    <div className="w-100 wrapper flex items-center justify-center">
      <div className="content max-w-[300px]">{props.children}</div>
    </div>
  )
}

export default ContentWrapper
