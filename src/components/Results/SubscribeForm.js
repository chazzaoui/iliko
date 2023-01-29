import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from "./CustomForm"
import SmallText from "./SmallText"

function SubscribeForm() {
  
  //
  return (
    <div className="subscribeForm mt-[2rem] flex items-center justify-center flex-col lg:items-start">
      <p className="font-bold text-[0.95rem]  leading-tight text-center">
        Drop your email below if you’re interested in special furniture deals!
      </p>

      <MailchimpSubscribe
        url={process.env.GATSBY_MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />

      <SmallText text={"We promise not to spam you"} />
    </div>
  )
}

export default SubscribeForm
