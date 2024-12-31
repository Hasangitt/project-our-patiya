import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
const Featured = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-14 md:mt-10">
        <h1 className="text-xl font-semibold">Featured</h1>
        <Link className="text-orange-500 text-xl font-semibold underline">
          View All
        </Link>
      </div>
      <div className="mt-14 md:mt-10">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={400}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper border"
        >
          <SwiperSlide>
            <Link>
              <div className="card bg-base-100 w-96 h-64 border p-4">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link>
              <div className="card bg-base-100 w-96 h-64 border p-4">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link>
              <div className="card bg-base-100 w-96 h-64 border p-4">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link>
              <div className="card bg-base-100 w-96 h-64 border p-4">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
              </div>
            </Link>
          </SwiperSlide>
          
      
        </Swiper>

        <p className="append-buttons">
          <button
            onClick={() => prepend2()}
            className="prepend-2-slides"
          ></button>
          <button onClick={() => prepend()} className="prepend-slide"></button>
          <button onClick={() => append()} className="append-slide"></button>
          <button
            onClick={() => append2()}
            className="append-2-slides"
          ></button>
        </p>
      </div>
    </div>
  );
};

export default Featured;
