import { motion } from "framer-motion";

const stats = [
  {
    title: "Income",
    amount: "₹15,000",
    color: "text-emerald-400",
  },
  {
    title: "Expense",
    amount: "₹8,000",
    color: "text-red-400",
  },
  {
    title: "Saved",
    amount: "₹7,000",
    color: "text-sky-400",
  },
];

const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 mt-6">
      {stats.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ y: -5 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <h3 className="text-slate-400">
            {item.title}
          </h3>

          <p
            className={`text-3xl font-bold mt-2 ${item.color}`}
          >
            {item.amount}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;