import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <div className="space-y-20 mt-20">
      <div>
        <h1 className="text-4xl text-center font-semibold">FEATURED</h1>
      </div>
      <div>
        <Swiper
          // slidesPerView={2}
          // spaceBetween={10}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // for small devices (sm)
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            // for medium devices (md)
            768: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            // for larger devices
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="mb-10">
            <Link>
              <div className="bg-white w-32 p-2 mx-auto border">
                <img
                  className="w-full h-fit"
                  src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                  alt=""
                />
                <h1 className="text-black text-center">Schools</h1>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
            <Link>
              <div className="bg-white w-32 p-2 mx-auto border">
                <img
                  className="w-full h-fit"
                  src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                  alt=""
                />
                <h1 className="text-black text-center">Schools</h1>
              </div>
            </Link>
          </SwiperSlide>
         
          {/* <SwiperSlide className="mb-10">
            <Link>
              <div className="card bg-base-100 w-60 md:w-96 border mx-auto">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide> */}
         
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
