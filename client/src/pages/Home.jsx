import Hero from "../components/Hero";
import WalletCard from "../components/WalletCard";
import StatsCards from "../components/StatsCards";
import RecentTransactions from "../components/RecentTransactions";
import SavingsGoal from "../components/SavingsGoal";

const Home = () => {
  return (
    <main className="max-w-6xl mx-auto px-5">
      <Hero />

      <WalletCard />

      <StatsCards />

      <SavingsGoal />

      <RecentTransactions />
    </main>
  );
};

export default Home;