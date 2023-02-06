import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios.config";
import ImageSkeleton from "../shared/ImageSkeleton";
import User from "./User";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then(res => setUserList(res.data.users))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <div className="grid grid-cols-grid-layout gap-4">
        {Array(14)
          .fill(1)
          .map((_, idx) => (
            <ImageSkeleton key={idx} />
          ))}
      </div>
    );

  return (
    <div className="grid grid-cols-grid-layout gap-4">
      {userList.map(user => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
