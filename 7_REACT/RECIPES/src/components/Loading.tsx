const Loading = () => {
  return (
    <div
      className="container d-flex gap-2 justify-content-center align-items-center"
      style={{ maxWidth: "500px", height: "calc(100vh - 88px)" }}
    >
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      Loading...
    </div>
  );
};

export default Loading;
