import axios from "axios";
import { useQuery } from "react-query";
import TextSkeleton from "../shared/TextSkeleton";
import Post from "./Post";

const Posts = () => {
  const getPostList = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return data;
  };

  const { isLoading, isError, isFetching, data } = useQuery(["posts"], () => getPostList());

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
    <div className="grid grid-cols-grid-layout gap-4">
      {data.map(item => {
        return <Post key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Posts;
