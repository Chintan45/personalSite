import "../index.css";
const Loading = () => {
  let screenHeight = window.screen.availHeight;
  return (
    <div
      className="loading-container"
      style={{ height: screenHeight, overflowY: "hidden" }}
    >
      <img
        src={"https://www.icegif.com/wp-content/uploads/2021/12/icegif-121.gif"}
        alt="batman"
        style={{
          width: "500px",
          height: "auto",
          maxWidth: "90vw",
          borderRadius: "5%",
        }}
      />
      <h1 className="loading-txt">Website is Loading...</h1>
    </div>
  );
};

export default Loading;
