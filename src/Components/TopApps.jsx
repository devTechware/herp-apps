import { Link } from "react-router";
import useApps from "../hooks/useApps";
import AppCard from "./AppCard";
import Loading from "./Loading";

const TopApps = () => {
  const { apps, loading } = useApps();
  if (loading) {
    return <Loading />;
  }
  const trendingApps = apps.slice(0, 8);

  return (
    <div className="w-11/12 mx-auto text-center py-12 space-y-4">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Trending Apps
      </h3>
      <p className="text-gray-400 text-xs md:text-sm lg:text-base">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <Link to="/apps" className="btn px-8 text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">Show All</Link>

    </div>
  );
};

export default TopApps;
