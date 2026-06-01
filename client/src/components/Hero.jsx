import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-center py-16">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold text-white"
      >
        Track Every Rupee 💰
      </motion.h1>

      <p className="text-slate-400 mt-4 text-lg">
        Manage expenses, savings goals and
        visualize your spending.
      </p>
    </section>
  );
};

export default Hero;