const RecentTransactions = () => {
  const data = [
    {
      title: "Food",
      amount: "-₹250",
      color: "text-red-400",
    },
    {
      title: "Salary",
      amount: "+₹5000",
      color: "text-emerald-400",
    },
    {
      title: "Petrol",
      amount: "-₹400",
      color: "text-red-400",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-8">
      <h2 className="text-white text-xl font-semibold mb-5">
        Recent Transactions
      </h2>

      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between py-3 border-b border-slate-800"
        >
          <span className="text-slate-300">
            {item.title}
          </span>

          <span className={item.color}>
            {item.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;