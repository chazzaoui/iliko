import React from "react"

function SmallText({ text, inline = false }) {
  return (
    <p className={`font-[1rem] ${inline && "inline"} font-medium`}>{text}</p>
  )
}

export default SmallText
