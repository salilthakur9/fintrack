import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-white"
      >
        Take Control Of
        <span className="text-cyan-400"> Your Money</span>
      </motion.h1>

      <p className="text-zinc-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
        Track expenses, savings and spending habits in one place.
      </p>
    </section>
  );
};

export default Hero;