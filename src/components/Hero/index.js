import React from "react"
import ContentWrapper from "../Layouts/ContentWrapper"
import Calculation from "./Calculation"
import Misc from "./MiscPart"

function Hero() {
  return (
    <div className="bg-Pinkish min-h-[100vh]">
      <ContentWrapper>
        <div>
          <Misc />
          <Calculation />
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Hero
