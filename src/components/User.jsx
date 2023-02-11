import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useQueryClient } from "react-query";
import imgPlaceholder from "../assets/img-placeholder.png";
import CachedEmoji from "./CachedEmoji";

const User = ({ id, image, setUserId }) => {
  const queryClient = useQueryClient();
  const isCached = queryClient.getQueryData(["user", id]);

  return (
    <>
      <div
        className="flex flex-col items-center pt-4 border-2 border-indigo-500 rounded-md hover:bg-indigo-500 duration-300 cursor-pointer"
        onClick={() => setUserId(id)}
      >
        <CachedEmoji isCached={isCached} />
        <LazyLoadImage
          alt={image?.alt}
          src={`${image}?size=150x150&set=set1`}
          effect="blur"
          placeholderSrc={imgPlaceholder}
        />
      </div>
    </>
  );
};

export default User;
