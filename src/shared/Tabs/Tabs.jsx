import { TABS_LIST } from "../../lists";
import Tab from "./Tab";

const Tabs = () => {
  return (
    <div className="flex items-center justify-center my-10">
      {TABS_LIST.map(tab => (
        <Tab>{tab.title}</Tab>
      ))}
    </div>
  );
};

export default Tabs;
