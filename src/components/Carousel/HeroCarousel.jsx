import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgImg from "../../assets/images/banner-image-bg.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlide from "./CarouselSlide";
import bookImg1 from "../../assets/images/banner-image2.png";
import bookImg2 from "../../assets/images/banner-image1.png";
import bookImg3 from "../../assets/images/banner-image.png";

const HeroCarousel = () => {
  const slides = [
    {
      title: "The Fine Print Book Collection",
      subtitle: "Best Offer Save 30%. Grab it now!",
      image: bookImg1,
    },
    {
      title: "How Innovation works",
      subtitle: "Discount available. Grab it now!",
      image: bookImg2,
    },
    {
      title: "Your Heart is the Sea",
      subtitle: "Limited stocks available. Grab it now!",
      image: bookImg3,
    },
  ];

  return (
    <div
      className="lg:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper font-bold"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide
              title={slide.title}
              subtitle={slide.subtitle}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
