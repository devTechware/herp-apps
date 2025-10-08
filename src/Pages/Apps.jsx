import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { useState } from "react";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchApps = term
    ? apps.filter((data) => data.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="bg-[#D2D2D230] flex-1">
      <div className="w-11/12 mx-auto text-center py-12 space-y-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Our All Applications
        </h3>
        <p className="text-gray-400 text-xs md:text-sm lg:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center px-2 py-2">
          <span className="font-bold">({searchApps.length}) Apps Found</span>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="search Apps"
            />
          </label>
        </div>
        {searchApps.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {searchApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <h1 className="text-5xl font-extrabold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            No App Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Apps;
