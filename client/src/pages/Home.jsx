import Hero from "../components/Hero";
import WalletCard from "../components/WalletCard";
import StatsCards from "../components/StatsCards";
import SavingsGoal from "../components/SavingsGoal";
import RecentTransactions from "../components/RecentTransactions";
import ExpenseChart from "../components/ExpenseChart";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main className="max-w-6xl mx-auto px-5">
        <Hero />

        <WalletCard />

        <StatsCards />

        <SavingsGoal />

        <ExpenseChart />

        <RecentTransactions />
      </main>

      <Footer />

      <FloatingButton />
    </>
  );
};

export default Home;