import Features from "../components/landing-page/features/Features";
import Hero from "../components/landing-page/hero/Hero"
import NavBar from "../components/landing-page/nav-bar/NavBar";
import FAQ from "../components/landing-page/faq/FAQ";
import Reviews from "../components/landing-page/reviews/Reviews";
import Footer from "../components/landing-page/footer/Footer";
import ToStart from "../components/landing-page/to-start/ToStart";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Reviews />
      <FAQ />
      <ToStart />
      <Footer />
    </div>
  )
}
export default LandingPage