import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { axiosInstance } from "../api/axios.config";
import ImageSkeleton from "../shared/ImageSkeleton";

const UserDetails = ({ id, setUserId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <ImageSkeleton isCenter />;

  return (
    <div className="flex flex-col items-center">
      <div onClick={() => setUserId(-1)} className="cursor-pointer">
        🔙
      </div>
      <LazyLoadImage alt={user.firstName} height={300} src={user.image} width={250} effect="blur" />
    </div>
  );
};

export default UserDetails;
