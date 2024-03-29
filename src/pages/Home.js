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
    function scrollToElementWithOffset(element, offset) {
      const rect = element.getBoundingClientRect();
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    if (scrollToReviews && reviewsRef.current) {
      scrollToElementWithOffset(reviewsRef.current, 80);
    } else if (scrollToServices && servicesRef.current) {
      scrollToElementWithOffset(servicesRef.current, 80);
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
