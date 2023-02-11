import axios from "axios";
import { useQuery } from "react-query";

const getData = async url => {
  const { data } = await axios.get(url);
  return data;
};

const useFetcher = (queryKey, url) => useQuery(queryKey, () => getData(url));
export default useFetcher;
