import { Link } from "react-router";

const AppNotFound = ({ onResetSearch }) => {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-6 text-center">
      <h1 className="text-3xl font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
        No App Found
      </h1>

      <Link
        to="/apps"
        onClick={onResetSearch}
        className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default AppNotFound;
