const Checkbox = ({ value, name, onChange, label }) => {
  return (
    <div className="flex items-center mr-4">
      <input
        id={name}
        type="checkbox"
        className="w-6 h-6 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
