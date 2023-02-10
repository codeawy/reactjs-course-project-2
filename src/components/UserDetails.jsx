import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import { axiosInstance } from "../api/axios.config";
import ImageSkeleton from "../shared/ImageSkeleton";

const UserDetails = ({ id, setUserId }) => {
  const getUser = async () => {
    const { data } = await axiosInstance.get(`/users/${id}`);
    return data;
  };

  const { isLoading, isError, isFetching, data } = useQuery(["user", id], () => getUser());

  if (isLoading) return <ImageSkeleton isCenter />;

  return (
    <div className="flex flex-col items-center">
      <div onClick={() => setUserId(-1)} className="cursor-pointer">
        🔙
      </div>
      <LazyLoadImage alt={data.firstName} height={300} src={data.image} width={250} effect="blur" />
    </div>
  );
};

export default UserDetails;
