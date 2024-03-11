import React, { useEffect, useRef } from "react";
import "../components/Home/Home.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Subhero from "../components/Subhero/Subhero";
import Reviews from "../components/Reviews/Reviews";
import Packages from "../components/Packages/Packages";

const Home = ({ scrollToReviews, scrollToServices }) => {
  const reviewsRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (scrollToReviews && reviewsRef.current) {
      reviewsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (scrollToServices && servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollToReviews, scrollToServices]);

  return (
    <div>
      <Nav />
      <Hero />
      <Subhero />
      <div ref={servicesRef}>
        <Packages />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
