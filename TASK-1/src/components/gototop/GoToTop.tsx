import topIcon from "../../assets/icons/go-to-top.svg";

const GoToTop = () => {
  const scrollToTop = () => {
    const section = document.getElementById("hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="gototop" onClick={scrollToTop}>
      <img src={topIcon} alt="Top" />
      Top
    </div>
  );
};

export default GoToTop;
