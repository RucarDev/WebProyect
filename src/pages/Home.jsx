import Hero from "../components/Hero";
import PortfolioPage from "./PortfolioPage";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick preview of portfolio */}
      <PortfolioPage />
    </>
  );
}