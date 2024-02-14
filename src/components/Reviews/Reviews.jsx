import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Reviews.css";
import reviewsData from "../../data/reviews";

const Reviews = () => {
  return (
    <div className="reviews-wrap">
      <div className="reviews-header">
        <h4>Our Reviews</h4>
        <span>
          Don't just take our word for it — here's what our clients love about
          us
        </span>
      </div>
      <div className="reviews-content">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="reviews-container-wrap"
          modules={[Autoplay]}
        >
          {reviewsData.map((review) => (
            <SwiperSlide className="reviews-container" key={review.id}>
              <h4>{review.title}</h4>
              <p>{review.content}</p>
              <span>{review.author}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
