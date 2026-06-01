import { motion } from "framer-motion";

const cards = [
  {
    title: "Income",
    amount: "₹15,000",
    color: "text-emerald-500",
  },
  {
    title: "Expense",
    amount: "₹8,000",
    color: "text-red-500",
  },
  {
    title: "Saved",
    amount: "₹7,000",
    color: "text-cyan-400",
  },
];

const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          whileHover={{ y: -4 }}
          className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5"
        >
          <p className="text-zinc-500 text-sm">
            {card.title}
          </p>

          <h2
            className={`text-3xl font-bold mt-2 ${card.color}`}
          >
            {card.amount}
          </h2>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;