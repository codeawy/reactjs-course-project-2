const User = ({ id, image, setUserId }) => {
  return (
    <div
      className="flex justify-center border-2 border-indigo-500 rounded-md hover:bg-indigo-500 duration-300 cursor-pointer"
      onClick={() => setUserId(id)}
    >
      <img src={image} alt={""} />
    </div>
  );
};

export default User;
