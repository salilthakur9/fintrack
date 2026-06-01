import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-12 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white">
  Take Control Of{" "}
  <span className="text-cyan-400">
    Your Money
  </span>
</h1>

      <p className="text-zinc-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
        Track expenses, savings and spending habits in one place.
      </p>
    </section>
  );
};

export default Hero;