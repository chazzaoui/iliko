import React from "react"
import HeroText from "./HeroText"

function Misc() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center">
      <HeroText text={"We don’t sell you overpriced furniture."} />
      <div className="mt-[3rem]">
        <HeroText
          text={"Calculate your furniture budget and see what you can afford."}
        />
      </div>
    </div>
  )
}

export default Misc
