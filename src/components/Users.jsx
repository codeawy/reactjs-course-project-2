import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios.config";

const Users = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then(res => setUserList(res.data.users))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {userList.map(user => (
        <p key={user.id}>{user.email}</p>
      ))}
    </div>
  );
};

export default Users;
