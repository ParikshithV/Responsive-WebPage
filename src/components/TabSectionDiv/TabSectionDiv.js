import bgnd from "./bgnd.png";
import "./TabSectionDiv.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { useState } from "react";
import TabCards from "./TabCards";

function TabSectionDiv() {
    const [activeTab, setActiveTab] = useState("tab1");
    const [tab1, setTab1] = useState("h6 link-success");
    const [tab2, setTab2] = useState("h6 link-secondary text-decoration-none");
    const [tab3, setTab3] = useState("h6 link-secondary text-decoration-none");

    function changeTab(e){
        setActiveTab(e);
        e === "tab1" && setTab1("h6 link-success")
        e !== "tab1" && setTab1("h6 link-secondary text-decoration-none")
        e === "tab2" && setTab2("h6 link-success")
        e !== "tab2" && setTab2("h6 link-secondary text-decoration-none")
        e === "tab3" && setTab3("h6 link-success")
        e !== "tab3" && setTab3("h6 link-secondary text-decoration-none")
    }

  return (
    <div id="tabsec" className="container d-flexjustify-content-center pt-5">
      <div id="tabSecContainer" className="row py-5">
        <div id="imgside" className="col-lg-6 col-md-12 col-xs-12 col-sm-12">
          <img id="leftimg" src={bgnd} alt="alt"/>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 col-sm-12">
            <div className="d-flex justify-content-around pt-3">
            <p className={tab1} onClick={(()=>{changeTab('tab1')})}>Tab1</p>
            <p className={tab2} onClick={(()=>{changeTab('tab2')})}>Tab2</p>
            <p className={tab3} onClick={(()=>{changeTab('tab3')})}>Tab3</p>   
            </div>
            <hr/>
            {activeTab === 'tab1' && <FeaturedProducts/>}
            {activeTab === 'tab2' && <TabCards>Tab2</TabCards>}
            {activeTab === 'tab3' && <TabCards>Tab3</TabCards>}
        </div>
      </div>
    </div>
  );
}

export default TabSectionDiv;
