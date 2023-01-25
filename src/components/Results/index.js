import React, { useState } from "react"
import ContentWrapper from "../Layouts/ContentWrapper"
import SectionTitle from "./SectionTitle"
import FurnitureLoader from "../../../static/animations/furnitureLoader.json"
import Lottie from "lottie-react"
import { useTabs } from "react-headless-tabs"
import SmallText from "./SmallText"
import EmptyBox from "./EmptyBox"
import PromptText from "../Hero/PromptText"
import SubscribeForm from "./SubscribeForm"
import { useEffect } from "react"

function Results({
  loading,
  companies,
  closestFurniture,
  selectedFurniture,
  calculatedFurniture,
  cheaperFurniture,
  costlierFurniture,
}) {
  const [activeTab, setActiveTab] = useState(selectedFurniture)

  return (
    <div className="chairbg min-h-[100vh] pb-[2rem]" id="resultsDiv">
      {loading ? (
        <Lottie animationData={FurnitureLoader} />
      ) : (
        <div>
          <ContentWrapper>
            <section className="mt-[3rem] ">
              <SectionTitle
                text={"Here's what you can expect to spent on furniture"}
              />
              <div>
                <select
                  value={activeTab}
                  onChange={e => {
                    setActiveTab(e.target.value)
                  }}
                  className="p-3 rounded-md min-w-[10rem] mt-[2rem]"
                >
                  {Object.keys(calculatedFurniture).map(item => {
                    if (calculatedFurniture?.[item]) {

                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )
                    }
                  })}
                </select>
                <div className="textPart">
                  <div className="mt-6 flex">
                    {" "}
                    <SmallText text={"Expect to spend:"} />{" "}
                    <span className="font-bold">
                      €
                      {calculatedFurniture[activeTab] ||
                        calculatedFurniture[selectedFurniture]}
                    </span>
                  </div>
                  <div className="mt-6">
                    <SmallText
                      text={
                        "We already searched the web for the best possible furniture matches for you..."
                      }
                    />{" "}
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="mt-6 max-w-[80%] flex flex-col items-center justify-center">
                      <div className="mt-2 flex items-center justify-center flex-col text-center  hover:border-2 p-2 hover:rounded-md cursor-pointer border-black">
                        <SmallText text={"iliko engine recommendation"} />

                        {closestFurniture ? (
                          <img src={companies[closestFurniture]} />
                        ) : (
                          <EmptyBox />
                        )}
                      </div>
                      <div className="mt-[2rem] flex items-center justify-center flex-col text-center hover:border-2 p-2 hover:rounded-md cursor-pointer border-black">
                        <SmallText
                          text={"If you are ok to spend a little less"}
                        />
                        {cheaperFurniture ? (
                          <img src={companies[cheaperFurniture]} alt="Image2" />
                        ) : (
                          <EmptyBox />
                        )}
                      </div>
                      <div className="mt-[2rem] flex items-center justify-center flex-col text-center hover:border-2 p-2 hover:rounded-md cursor-pointer border-black">
                        <SmallText
                          text={"If you are ok to spend a little more"}
                        />
                        {costlierFurniture ? (
                          <img src={companies[costlierFurniture]} />
                        ) : (
                          <EmptyBox />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="tryForAll mt-[2rem] flex items-center flex-col">
                    <PromptText
                      text={"OR try this platform for all your furniture needs"}
                    />
                    <EmptyBox />
                  </div>
                  <div className="line w-[100%] mt-[2rem] bg-black h-[1px]"></div>
                  <SubscribeForm />
                </div>
              </div>
            </section>
          </ContentWrapper>
          <div className="singlechair"></div>
        </div>
      )}
    </div>
  )
}

export default Results
