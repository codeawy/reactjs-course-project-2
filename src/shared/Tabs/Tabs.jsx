import { useState } from "react";
import { TABS_LIST } from "../../lists";
import Tab from "./Tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TABS_LIST[0].name);
  const [tempIdx, setTempIdx] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-center my-10">
        {TABS_LIST.map((tab, idx) => (
          <Tab
            key={tab.id}
            onClick={() => {
              setTempIdx(idx);
              setActiveTab(tab.name);
            }}
            isActive={activeTab === tab.name}
          >
            {tab.title}
          </Tab>
        ))}
      </div>
      {TABS_LIST[tempIdx].tabPanel}
    </div>
  );
};

export default Tabs;
