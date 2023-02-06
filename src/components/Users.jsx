import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios.config";
import ImageSkeleton from "../shared/ImageSkeleton";
import User from "./User";
import UserDetails from "./UserDetails";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState(-1);

  useEffect(() => {
    axiosInstance
      .get("/users?limit=100")
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
    <>
      {userId > 0 ? (
        <UserDetails id={userId} setUserId={setUserId} />
      ) : (
        <div className="grid grid-cols-grid-layout gap-4">
          {userList.map(user => (
            <User key={user.id} {...user} setUserId={setUserId} />
          ))}
        </div>
      )}
    </>
  );
};

export default Users;
