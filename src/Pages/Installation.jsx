import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { compactNumber } from "../utils/compactNumber";
import { toast } from "react-toastify";

const Installation = () => {
  const loadInstalledApps = () => {
    const installation = localStorage.getItem("installation");
    return installation ? JSON.parse(installation) : [];
  };

  const handleRemoveApp = (id, title) => {
    const updatedInstalledApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps([...updatedInstalledApps]);
    localStorage.setItem("installation", JSON.stringify(updatedInstalledApps));
    toast(`"${title}" App removed.`);
  };

  const [installedApps, setInstalledApps] = useState(() => loadInstalledApps());
  const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === "downloads-asc") {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-desc") {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedApps;
    }
  })();

  return (
    <div className="">
      <div className="w-11/12 mx-auto text-center py-12 space-y-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Your Installed Apps
        </h3>
        <p className="text-gray-400 text-xs md:text-sm lg:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>

        {!installedApps.length ? (
          <h1 className="text-center py-10 text-5xl font-extrabold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            No App Installed
          </h1>
        ) : (
          <>
            <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between py-5 items-center">
              <h1 className="text-3xl font-semibold">
                <span className="text-xl font-bold text-gray-500">
                  ({sortedItem.length}) Apps Found.
                </span>
              </h1>

              <label className="form-control w-full max-w-xs">
                <select
                  className="select select-bordered"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="none">Sort by Downloads</option>
                  <option value="downloads-asc">Low-&gt;High</option>
                  <option value="downloads-desc">High-&gt;Low</option>
                </select>
              </label>
            </div>
            <div className="space-y-3">
              {sortedItem.map((app) => (
                <div
                  key={app.id}
                  className=" flex justify-between items-center border rounded px-2 py-1"
                >
                  <div className="flex gap-4">
                    <figure className="">
                      <img
                        className="w-15 h-15 object-cover border rounded-xl"
                        src={app.image}
                        alt={app.title}
                      />
                    </figure>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-base font-bold">{app.title}</h3>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className="flex items-center gap-2 text-[#00D390] px-2 py-1 rounded-md">
                          <PiDownloadSimpleBold />{" "}
                          {compactNumber(app.downloads)}
                        </span>
                        <span className="flex items-center gap-2 text-[#FF8811] px-2 py-1 rounded-md">
                          <FaStar /> {app.ratingAvg}
                        </span>
                        <span>{app.size}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleRemoveApp(app.id, app.title)}
                      className="btn btn-outline bg-[#00D390] text-white"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Installation;
