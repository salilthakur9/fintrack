const SavingsGoal = () => {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 mt-6">
      <div className="flex justify-between mb-3">
        <h2 className="text-white font-semibold">
          Monthly Goal
        </h2>

        <span className="text-cyan-400">
          ₹10,000
        </span>
      </div>

      <div className="w-full bg-zinc-800 h-3 rounded-full">
        <div className="bg-cyan-400 h-3 rounded-full w-[35%]" />
      </div>

      <p className="text-zinc-400 text-sm mt-3">
        Saved ₹3,500 of ₹10,000
      </p>

      <p className="text-emerald-500 text-sm mt-1">
        You can spend ₹1,080/day
      </p>
    </div>
  );
};

export default SavingsGoal;