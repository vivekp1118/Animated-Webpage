import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HabitsCard from "../components/HabitsCard";
import Info from "../components/Info";
import Scroller from "../components/ImprovementScroller";
import Assesment from "../components/Assesmment";
import Test from "../components/Test";
import About from "../components/About";
import Careers from "../components/Careers";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HabitsCard />
      <Info />
      <Scroller />
      <Assesment />
      <Test />
      <About />
      <Careers />
      <Footer />
    </>
  );
}
