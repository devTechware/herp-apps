import { Link } from "react-router";
import GooglePlay from "../assets/google-paly.png";
import AppStore from "../assets/app-store.png";
import Hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="text-center pt-12 md:pt-16 lg:pt-20 flex flex-col gap-5">
      <h1 className="text-5xl font-bold">
        We Build <br />{" "}
        <span className="font-extrabold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[#627382] text-xs max-w-11/12 md:max-w-2/3 lg:max-w-1/2 mx-auto">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center items-center gap-4">
        <Link
          target="_blank"
          to="https://play.google.com/store/apps"
          className="btn text-xl flex justify-center items-center gap-2 ml-2 lg:ml-0"
        >
          <img className="w-[15px]" src={GooglePlay} alt="Google Play" />{" "}
          <span className="text-sm font-semibold">Google Play</span>
        </Link>
        <Link
          target="_blank"
          to="https://www.apple.com/app-store/"
          className="btn text-xl flex justify-center items-center gap-2 ml-2 lg:ml-0"
        >
          <img className="w-[15px]" src={AppStore} alt="App Store" />{" "}
          <span className="text-sm font-semibold">App Store</span>
        </Link>
      </div>
      <img className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto" src={Hero} alt="" />
    </div>
  );
};

export default Banner;
