const User = ({ image }) => {
  return (
    <div className="flex justify-center border-2 border-indigo-500 rounded-md hover:bg-indigo-500 duration-300 cursor-pointer">
      <img src={image} alt={""} />
    </div>
  );
};

export default User;
