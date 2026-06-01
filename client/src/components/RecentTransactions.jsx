const transactions = [
  {
    title: "Salary",
    amount: "+₹5,000",
    color: "text-emerald-500",
  },
  {
    title: "Food",
    amount: "-₹250",
    color: "text-red-500",
  },
  {
    title: "Petrol",
    amount: "-₹400",
    color: "text-red-500",
  },
];

const RecentTransactions = () => {
  return (
    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-3xl
      mt-8
      p-6
      "
    >
      <h2 className="text-xl font-semibold text-white mb-6">
        Recent Transactions
      </h2>

      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="
          flex
          justify-between
          items-center
          py-4
          border-b
          border-zinc-800
          last:border-none
          "
        >
          <span className="text-zinc-300">
            {transaction.title}
          </span>

          <span
            className={`font-semibold ${transaction.color}`}
          >
            {transaction.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;