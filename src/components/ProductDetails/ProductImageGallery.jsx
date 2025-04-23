import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/default-img.jpeg";

const ProductImageGallery = ({ images, productName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const displayImages =
    images.length > 0 ? images : [{ id: 0, image: defaultImage }];

  return (
    <div className="product-detail bg-black !rounded-xl">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-xl"
      >
        {displayImages.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              className="w-full h-full object-cover"
              src={img.image}
              alt={productName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-10 md:h-20 !px-2 !py-2"
      >
        {displayImages.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              className="w-full h-full object-cover"
              src={img.image}
              alt={productName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageGallery;
