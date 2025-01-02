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
        <h3 className="text-3xl md:text-4xl text-white noto-serif-bengali">
          আমাদের{" "}
          <span className="text-orange-400 noto-serif-bengali">পটিয়া</span>
        </h3>
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
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-[220px] md:h-[450px]"
        >
          <SwiperSlide>
            <img
              className="h-[220px] md:h-[450px] w-full rounded-3xl"
              src="https://asset.kalerkantho.com/public/news_images/2023/09/20/1695185199-897db2d5e96336272aa3d38bb4e89498.jpg"
            />
          </SwiperSlide>
         <SwiperSlide>
            <img
              className="h-[220px] md:h-[450px] w-full rounded-3xl"
              src="https://asset.kalerkantho.com/public/news_images/2024/03/06/1709747581-5c9a118ae101af2c982959508e25d877.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" h-[220px] md:h-[450px] w-full rounded-3xl"
              src="https://lh3.googleusercontent.com/p/AF1QipO4KLLNgqz0igBCaiX_fhk9BhjFN2153aOZKVZ-=s1360-w1360-h1020"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" h-[220px] md:h-[450px] w-full rounded-3xl"
              src="https://insaf24.net/wp-content/uploads/%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE-%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE-%E0%A6%AA%E0%A6%9F%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE-%E0%A6%AE%E0%A6%BE%E0%A6%A6%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A6%BE-1068x662.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" h-[220px] md:h-[450px] w-full rounded-3xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAxoUPMlxOx9vOHMasRSjIb4r3f9Q5i6lPA&s"
            />
          </SwiperSlide> 
          <span ref={progressCircle}></span>
          <span ref={progressContent}></span>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
