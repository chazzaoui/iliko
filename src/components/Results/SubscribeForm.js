import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from "./CustomForm"
import SmallText from "./SmallText"

function SubscribeForm() {
  const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=0a0c13f41d8a04cd71dfdaccc&id=ae0d2e921c`

  // 
  return (
    <div className="subscribeForm mt-[2rem] flex items-center justify-center flex-col lg:items-start">
      <p className="font-bold text-[0.95rem]  leading-tight text-center">
        Drop your email below if you’re interested in special furniture deals!
      </p>

      <MailchimpSubscribe
        url={postUrl}
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
