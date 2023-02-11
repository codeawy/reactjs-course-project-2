import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import TextSkeleton from "../shared/TextSkeleton";
import Post from "./Post";

const Posts = () => {
  const getPostList = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/postsaaaa`);
    return data;
  };

  const { isLoading, isError, isFetching, data, error } = useQuery(["posts"], () => getPostList());

  if (isError && error.response.status === 404) {
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <a href="#" className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
              Go home
            </a>
          </div>
        </div>
      </div>
    </>
  );

  if (isLoading)
    return (
      <div className="grid grid-cols-grid-layout gap-4">
        {Array(12)
          .fill(1)
          .map((_, idx) => (
            <TextSkeleton key={idx} />
          ))}
      </div>
    );

  return (
    <>
      {isFetching ? <Spinner /> : null}
      <div className="grid grid-cols-grid-layout gap-4">
        {data.map(item => {
          return <Post key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Posts;
