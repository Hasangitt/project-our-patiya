import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="space-y-10">
      <div className="mt-10 space-y-2">
        <h3 className="text-3xl md:text-4xl text-black">Explore the</h3>
        <h1 className=" text-4xl md:text-6xl font-bold text-black">
          Beautiful <span className="text-orange-400">Patiya</span>
        </h1>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-56 md:h-64"
        >
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-56 md:h-64 w-full rounded-3xl" src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <span ref={progressCircle}></span>
          <span ref={progressContent}></span>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
