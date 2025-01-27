import image from "../assets/image.svg";
import desktopImg from "../assets/desktop.svg";
const Image = () => {
  return (
    <>
      <img className="lg:hidden" src={image} alt="image" />
      <img className="hidden lg:block -z-10" src={desktopImg} alt="image" />
    </>
  );
};

export default Image;
