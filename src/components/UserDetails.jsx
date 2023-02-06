import { useEffect, useState } from "react";
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
      <img src={user.image} alt="" />
    </div>
  );
};

export default UserDetails;
