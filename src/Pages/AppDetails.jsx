import { Link, useParams } from "react-router";
import useApps from "../hooks/useApps";
import IconDownload from "../assets/icon-downloads.png";
import IconRating from "../assets/icon-ratings.png";
import IconReview from "../assets/icon-review.png";
import RatingChart from "../Components/RatingChart";
import { compactNumber } from "../utils/compactNumber";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [installed, setInstalled] = useState(false);

  if (loading) {
    return <Loading />;
  }

  const app = apps?.find((data) => data.id === Number(id));

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = app;

  const reverseRatings = ratings?.slice().reverse();

  //   const handleAddToWishList = () => {
  //     const existingList = JSON.parse(localStorage.getItem('wishlist'))
  //     let updatedList = []
  //     if (existingList) {
  //       const isDuplicate = existingList.some(p => p.id === product.id)
  //       if (isDuplicate) return alert('Sorry vai')
  //       updatedList = [...existingList, product]
  //     } else {
  //       updatedList.push(product)
  //     }
  //     localStorage.setItem('wishlist', JSON.stringify(updatedList))
  //   }

  const handleAddToInstallation = () => {
    const existingInstallation = JSON.parse(
      localStorage.getItem("installation")
    );
    console.log(existingInstallation);

    let updatedInstallation = [];
    if (existingInstallation) {
      const isDuplicate = existingInstallation.some((a) => a.id === app.id);
      if (isDuplicate) {
        toast("Already in the List");
        return;
      }
      updatedInstallation = [...existingInstallation, app];
      setInstalled(true);
      toast("Added to Installation");
    } else {
      updatedInstallation.push(app);
      setInstalled(true);
      toast("Added to Installation");
    }

    localStorage.setItem("installation", JSON.stringify(updatedInstallation));
  };

  return (
    <div className="bg-[#D2D2D230]">
      <div className="w-11/12 mx-auto py-12 space-y-8">
        <div className="flex gap-4 md:gap-8">
          <figure className="w-2/5 lg:w-1/5 overflow-hidden">
            <img className="w-full" src={image} alt={title} />
          </figure>
          <div className="flex-1 flex flex-col gap-1 justify-between items-start">
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-lg md:text-xl font-bold">{title}</h3>
              <p className="text-sm text-gray-400">
                Developed by{" "}
                <span className="font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                  {companyName}
                </span>
              </p>
              <hr className="text-gray-300 border" />
            </div>
            <div className="flex gap-2 md:gap-8">
              <div className="space-y-1">
                <img
                  className="w-[15px] md:w-[25px]"
                  src={IconDownload}
                  alt="Download Icon"
                />
                <p className="text-xs">Downloads</p>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  {compactNumber(downloads)}
                </h2>
              </div>
              <div className="space-y-1">
                <img
                  className="w-[15px] md:w-[25px]"
                  src={IconRating}
                  alt="Rating Icon"
                />
                <p className="text-xs">Average Ratings</p>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  {ratingAvg}
                </h2>
              </div>
              <div className="space-y-1">
                <img
                  className="w-[15px] md:w-[25px]"
                  src={IconReview}
                  alt="Review Icon"
                />
                <p className="text-xs">Total Reviews</p>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  {compactNumber(reviews)}
                </h2>
              </div>
            </div>
            <Link
              onClick={() => handleAddToInstallation()}
              className="btn bg-[#00D390] text-white"
              disabled={installed}
            >
              {installed ? `Installed` : `Install Now (${size} MB)`}
            </Link>
          </div>
        </div>
        <hr className="text-gray-300 border" />
        <div>
          <RatingChart data={reverseRatings} />
        </div>
        <hr className="text-gray-300 border" />
        <div className="space-y-4">
          <p className="font-semibold">Description</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
