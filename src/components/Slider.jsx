// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// https://i.ibb.co.com/q9KJrTt/srikant-sahoo-r2-L6v-CKa-VRk-unsplash.jpg
// https://i.ibb.co.com/B4Cr3fY/ferdinand-stohr-Pe-Fk7fzx-Tdk-unsplash.jpg
// https://i.ibb.co.com/7zkq8Kc/sebastian-enrique-Tlqm4w9-LO3k-unsplash.jpg

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        parallax={true} // Enable the parallax effect
        loop={true} // Enable infinite loop
        speed={500} // Slide transition speed
        paginationn={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        effect="slide" // Choose the slide effect
      >
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[450px] lg:h-[900px] relative group"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/SP9Hk8p/jad-limcaco-NT1m-JPgni6-A-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2>Slide 1</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[450px] lg:h-[900px] relative group"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/7zkq8Kc/sebastian-enrique-Tlqm4w9-LO3k-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2>Slide 1</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[450px] lg:h-[900px] relative group"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/B4Cr3fY/ferdinand-stohr-Pe-Fk7fzx-Tdk-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2>Slide 1</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[450px] lg:h-[900px] relative group"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/q9KJrTt/srikant-sahoo-r2-L6v-CKa-VRk-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2>Slide 1</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
