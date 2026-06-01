import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-extrabold text-white"
      >
        Take Control Of
        <span className="text-cyan-400"> Your Money</span>
      </motion.h1>

      <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
        Track expenses, monitor savings goals and understand
        where every rupee goes.
      </p>
    </section>
  );
};

export default Hero;