import { motion } from "framer-motion";

const WalletCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-950
      p-8
      "
    >
      <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      <p className="text-zinc-500">
        Current Wallet
      </p>

      <h1 className="text-5xl font-bold text-cyan-400 mt-3">
        ₹25,000
      </h1>

      <p className="text-emerald-500 mt-4">
        +12% this month
      </p>
    </motion.div>
  );
};

export default WalletCard;