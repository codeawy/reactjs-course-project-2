const CachedEmoji = ({ isCached = false }) => {
  return (
    <>
      {isCached ? <span className="text-lg">โกโกโก</span> : <span className="text-lg">๐๐๐</span>}
    </>
  );
};

export default CachedEmoji;
