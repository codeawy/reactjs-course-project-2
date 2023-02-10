const Select = ({ id, label, optionList = [], onChange = () => {} }) => {
  return (
    <div className="flex items-center justify-center">
      <label htmlFor={id} className="block mr-2 text-md font-medium text-gray-900 dark:text-white ">
        {label}
      </label>
      <select
        id={id}
        className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-indigo-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5"
        onChange={onChange}
      >
        {optionList.map((option, idx) => (
          <option value={option} key={idx}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
