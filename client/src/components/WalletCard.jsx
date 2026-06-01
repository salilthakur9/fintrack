import { motion } from "framer-motion";

const WalletCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
    >
      <p className="text-slate-400">
        Current Wallet
      </p>

      <h2 className="text-5xl font-bold text-sky-400 mt-2">
        ₹25,000
      </h2>

      <p className="text-emerald-400 mt-3">
        +12% from last month
      </p>
    </motion.div>
  );
};

export default WalletCard;