// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Time between slides (in milliseconds)
          disableOnInteraction: false, // Keeps autoplay running even after interaction
        }}
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
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[800px] relative group"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/SP9Hk8p/jad-limcaco-NT1m-JPgni6-A-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-montserrat">
                Explore the World with Ease
              </h2>
              <p className="text-gray-300 text-sm lg:text-xl max-w-2xl text-center animate__animated animate__fadeInLeft font-lato">
                Discover seamless visa solutions tailored to your travel needs.
                Your journey starts here!
              </p>{" "}
              <Link to="/allVisas">
                <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white border-none shadow-none">
                  Apply Visa
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[800px] relative group"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/7zkq8Kc/sebastian-enrique-Tlqm4w9-LO3k-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex space-y-2 p-4 flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-montserrat">
                Seamless Visa Solutions
              </h2>
              <p className="text-gray-300 text-sm lg:text-xl max-w-2xl text-center animate__animated animate__fadeInLeft font-lato">
                Explore new destinations with confidence, backed by our trusted
                visa solutions.
              </p>{" "}
              <Link to="/allVisas">
                <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white border-none shadow-none">
                  Apply Visa
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[800px] relative group"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/B4Cr3fY/ferdinand-stohr-Pe-Fk7fzx-Tdk-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex justify-center items-center space-y-2 p-4 flex-col w-full h-full text-white text-4xl font-bold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-montserrat">
                Unlock Your Travel Dreams
              </h2>
              <p className="text-gray-300 text-sm lg:text-xl max-w-2xl text-center animate__animated animate__fadeInLeft font-lato">
                Discover the world's most beautiful destinations and plan your
                next adventure.
              </p>{" "}
              <Link to="/allVisas">
                <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white border-none shadow-none">
                  Apply Visa
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[800px] relative group"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/q9KJrTt/srikant-sahoo-r2-L6v-CKa-VRk-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex justify-center items-center space-y-2 p-4 flex-col w-full h-full text-white text-4xl font-bold relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-montserrat">
                Discover the Beauty of Nature
              </h2>
              <p className="text-gray-300 text-sm lg:text-xl max-w-2xl text-center animate__animated animate__fadeInLeft font-lato">
                Unlock the secrets of the natural world and immerse yourself in
                breathtaking landscapes.
              </p>{" "}
              <Link to="/allVisas">
                <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white border-none shadow-none">
                  Apply Visa
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
