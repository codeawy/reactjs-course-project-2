import { useState } from "react";
import { TABS_LIST } from "../../lists";
import Tab from "./Tab";

// ** A => String ❤

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TABS_LIST[0].name);
  const [tempIdx, setTempIdx] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-center my-10">
        {TABS_LIST.map((tab, idx) => (
          <Tab key={tab.id} onClick={() => setTempIdx(idx)}>
            {tab.title}
          </Tab>
        ))}
      </div>
      {TABS_LIST[tempIdx].tabPanel}
    </div>
  );
};

export default Tabs;
