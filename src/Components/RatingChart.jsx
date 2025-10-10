import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ data }) => {
  return (
    <div className="w-full h-80 bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-3">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 40, bottom: -5 }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            width={80}
            tick={{ fontSize: 14 }}
          />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#ff8c00"
            barSize={30}
            radius={[0, 10, 10, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
