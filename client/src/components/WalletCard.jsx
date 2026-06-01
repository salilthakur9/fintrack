import { motion } from "framer-motion";
import { FaWallet } from "react-icons/fa";

const WalletCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-3xl
      p-6
      flex
      justify-between
      items-center
      "
    >
      <div>
        <p className="text-zinc-500">
          Current Balance
        </p>

        <h1 className="text-4xl font-bold text-cyan-400 mt-2">
          ₹25,000
        </h1>

        <p className="text-emerald-500 mt-2">
          +12% this month
        </p>
      </div>

      <FaWallet className="text-cyan-400 text-5xl opacity-40" />
    </motion.div>
  );
};

export default WalletCard;