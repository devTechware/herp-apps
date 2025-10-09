import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { compactNumber } from "../utils/compactNumber";


const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;

  return (
    <Link to={`/app-details/${id}`}>
      <div className="bg-white p-3 flex flex-col w-9/12 mx-auto md:w-full h-full rounded-lg space-y-4">
        <figure className="w-full mx-auto overflow-hidden border rounded-xl">
          <img className="w-full object-cover" src={image} alt={title} />
        </figure>
        <p className="text-md font-semibold flex-1">{title}</p>
        <div className="flex justify-between text-md font-semibold">
          <span className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] px-2 py-1 rounded-md">
            <PiDownloadSimpleBold /> {compactNumber(downloads)} 
          </span>
          <span className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] px-2 py-1 rounded-md">
            <FaStar /> {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
