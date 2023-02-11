import { txtSlicer } from "../utils/func";

const Post = ({ id, title, body, setPostId }) => {
  return (
    <div
      className="border-2 border-indigo-600  rounded-md p-5 duration-300 hover:bg-indigo-500 hover:text-white text-sm cursor-pointer"
      onClick={() => setPostId(id)}
    >
      <p className="mb-1 text-sm">
        <span className="font-semibold">ID: {id}</span>
      </p>
      <p className="mb-1 text-sm">
        <span className="font-semibold">Title: {txtSlicer(title, 10)}</span>
      </p>
      <p className="mb-1 text-sm">
        <span className="font-semibold">Description</span>: {txtSlicer(body, 80)}
      </p>
    </div>
  );
};

export default Post;
