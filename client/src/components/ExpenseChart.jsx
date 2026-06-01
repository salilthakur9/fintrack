import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", amount: 400 },
  { day: "Tue", amount: 300 },
  { day: "Wed", amount: 500 },
  { day: "Thu", amount: 200 },
  { day: "Fri", amount: 700 },
  { day: "Sat", amount: 600 },
  { day: "Sun", amount: 350 },
];

const ExpenseChart = () => {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 mt-6">
      <h2 className="text-xl font-semibold text-white mb-5">
        Weekly Spending
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="day" stroke="#71717a" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="#06b6d4"
              fill="#06b6d4"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;