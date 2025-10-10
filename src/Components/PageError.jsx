import { Link } from "react-router";
import ErrorImg from "../assets/error-404.png";

const PageError = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-2 text-center">
      <figure>
        <img className="h-[40vh]" src={ErrorImg} alt="App Search Error" />
      </figure>
      <h1 className="text-3xl font-bold">Oops, page not found!</h1>
      <p className="text-[#627382] text-xs max-w-11/12 md:max-w-2/3 lg:max-w-1/2 mx-auto">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
      >
        Go to Home!
      </Link>
    </div>
  );
};

export default PageError;
