import React from "react"
import HeroText from "./HeroText"

function Misc() {
  return (
    <div className="h-[100vh] flex flex-col ">
      <div className="text h-[85vh] flex items-center justify-center flex-col z-[20]">
        <HeroText
          font="bold"
          text={"We don’t sell you overpriced furniture."}
        />
        <div className="mt-[3rem]">
          <HeroText
            text={
              "Calculate your furniture budget and see what you can afford."
            }
          />
        </div>
        <a
          href="/#calculate"
          className="bg-DarkPink rounded-md px-3 text-[1.2rem] cursor-hover py-2 outline-o hover:bg-Pinkish mt-[3rem] text-white font-light"
        >
          Let's go
        </a>
      </div>

      <div className="bg-couch z-0 absolute w-[100%] h-[100%] bg-blend-dark  left-0"></div>
    </div>
  )
}

export default Misc
