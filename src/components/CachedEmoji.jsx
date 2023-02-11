const CachedEmoji = ({ isCached = false }) => {
  return (
    <>
      {isCached ? <span className="text-lg">⚡⚡⚡</span> : <span className="text-lg">🐌🐌🐌</span>}
    </>
  );
};

export default CachedEmoji;
