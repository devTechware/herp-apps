import { Link } from "react-router";
import AppError from "../assets/App-Error.png";

const AppRouteError = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-2 text-center">
      <figure>
        <img className="h-[40vh]" src={AppError} alt="App Search Error" />
      </figure>
      <h1 className="text-3xl font-bold">OPPS!! APP NOT FOUND</h1>
      <p className="text-[#627382] text-xs max-w-11/12 md:max-w-2/3 lg:max-w-1/2 mx-auto">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <div className="flex gap-2">
        <Link to="/" className="btn btn-outline bg-[#00D390] text-white">
          Home
        </Link>
        <Link
          to={-1}
          className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default AppRouteError;
