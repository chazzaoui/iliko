import React from "react"

function HeroText({ text, font }) {
  return (
    <div
      className={`font-${
        font ? "bold" : "semibold"
      } text-[1.7rem] leading-tight text-center`}
    >
      {text}
    </div>
  )
}

export default HeroText
