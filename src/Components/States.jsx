const States = () => {
  return (
    <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white p-8 lg:p-16 text-center">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Trusted by Millions, Built for You
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 lg:gap-28">
        <div className="text-center space-y-2 mt-4">
          <p className="text-xs text-gray-300">Total Downloads</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">29.6M</h2>
          <p className="text-xs text-gray-300">21% more than last month</p>
        </div>
        <div className="text-center space-y-2 mt-4">
          <p className="text-xs text-gray-300">Total Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">906K</h2>
          <p className="text-xs text-gray-300">46% more than last month</p>
        </div>
        <div className="text-center space-y-2 mt-4">
          <p className="text-xs text-gray-300">Active Apps</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">132+</h2>
          <p className="text-xs text-gray-300">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default States;
