const Tab = ({ isActive, children, onClick }) => {
  return (
    <div
      className={`mx-3 ${
        isActive ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-600 hover:bg-gray-700"
      } p-2 cursor-pointer duration-300 rounded-md text-sm`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Tab;
