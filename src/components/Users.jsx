import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "../api/axios.config";
import useFetcher from "../hooks/useFetcher";
import Checkbox from "../shared/Checkbox/Checkbox";
import ImageSkeleton from "../shared/ImageSkeleton";
import Select from "../shared/Select/Select";
import User from "./User";
import UserDetails from "./UserDetails";

const Users = () => {
  const [userId, setUserId] = useState(-1);
  const [limit, setLimit] = useState(30);
  const [queryParams, setQueryParams] = useState({
    ip: "",
    password: "",
    domain: "",
  });

  const { ip, password, domain } = queryParams;
  const { isLoading, data } = useFetcher(
    ["users", queryParams, limit],
    `https://dummyjson.com/users?limit=${limit}&select=image${ip}${password}${domain}`
  );

  const onQueryParamsChanged = e => {
    const { name, checked } = e.target;
    setQueryParams({ ...queryParams, [name]: checked ? `,${name}` : "" });
  };

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
        <>
          <Select
            id="limit"
            label={"Limit: "}
            optionList={[10, 30, 50, 100]}
            onChange={e => setLimit(e.target.value)}
          />
          <div className="flex items-center justify-center mb-5">
            <Checkbox
              label="IP"
              checked={queryParams.ip}
              onChange={onQueryParamsChanged}
              name="ip"
            />
            <Checkbox
              label="Password"
              checked={queryParams.password}
              onChange={onQueryParamsChanged}
              name="password"
            />
            <Checkbox
              label="Domain"
              checked={queryParams.domain}
              onChange={onQueryParamsChanged}
              name="domain"
            />
          </div>
          <div className="grid grid-cols-grid-layout gap-4">
            {data.users.map(user => (
              <User key={user.id} {...user} setUserId={setUserId} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Users;

// ** React Query
// ** User Details
// ** API Pagination
// ** Custom Hooks
