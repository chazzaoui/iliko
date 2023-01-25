import React from "react"
import SmallText from "./SmallText"

function SubscribeForm() {
  return (
    <div className="subscribeForm mt-[2rem] flex items-center justify-center flex-col">
      <p className="font-bold text-[0.95rem]  leading-tight text-center">
        Drop your email below if you’re interested in special furniture deals!
      </p>
      <input
        className="p-3 min-w-[16rem] rounded-md mt-4 outline-DarkPink"
        placeholder="Your Email"
        name="email"
        type={"email"}
      />
      <SmallText text={"We promise not to spam you"} />
    </div>
  )
}

export default SubscribeForm
