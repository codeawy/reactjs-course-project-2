import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery, useQueryClient } from "react-query";
import { axiosInstance } from "../api/axios.config";
import ImageSkeleton from "../shared/ImageSkeleton";
import CachedEmoji from "./CachedEmoji";

const UserDetails = ({ id, setUserId }) => {
  const queryClient = useQueryClient();
  const isCached = queryClient.getQueryData(["user", id]);

  const getUser = async () => {
    const { data } = await axiosInstance.get(`/users/${id}`);
    return data;
  };

  const { isLoading, isError, isFetching, data } = useQuery(["user", id], () => getUser());

  if (isLoading) return <ImageSkeleton isCenter />;

  return (
    <div className="flex flex-col items-center">
      <CachedEmoji isCached={isCached} />

      <div onClick={() => setUserId(-1)} className="cursor-pointer mt-5">
        🔙
      </div>
      <LazyLoadImage alt={data.firstName} height={300} src={data.image} width={250} effect="blur" />
    </div>
  );
};

export default UserDetails;
