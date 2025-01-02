import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}
const Featured = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      breakpoints: {
        // For small devices
        "(max-width: 640px)": {
          slides: {
            perView: 2, // Show 2 slides for small devices
            spacing: 5, // Adjust spacing for small screens
          },
        },
        // For medium devices
        "(max-width: 768px)": {
          slides: {
            perView: 2, // Show 3 slides for medium devices
            spacing: 8, // Adjust spacing for medium screens
          },
        },
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <div className="space-y-20 mt-20">
      <div>
        <h1 className="text-5xl text-center text-white font-bold">FEATURED</h1>
      </div>
      <div>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Link>
              <div className="bg-white w-full h-[400px] p-2 mx-auto">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                  alt=""
                />
                <h1 className="text-black text-center">Schools</h1>
              </div>
            </Link>
          </div>
          <div className="keen-slider__slide number-slide2">
            <Link>
              <div className="bg-white w-full h-[400px] p-2 mx-auto">
                <img
                  className="w-full h-[400px]"
                  src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                  alt=""
                />
                <h1 className="text-black text-center">Schools</h1>
              </div>
            </Link>
          </div>
          <div className="keen-slider__slide number-slide3">
            <Link>
              <div className="bg-white w-full h-[400px] p-2 mx-auto">
                <img
                  className="w-full h-[400px]"
                  src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                  alt=""
                />
                <h1 className="text-black text-center">Schools</h1>
              </div>
            </Link>
          </div>
          <div className="keen-slider__slide number-slide4">
            <Link>
              <div className="bg-white w-full h-[400px] p-2 mx-auto">
                <img
                  className="w-full h-[400px]"
                  src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                  alt=""
                />
                <h1 className="text-black text-center">Schools</h1>
              </div>
            </Link>
          </div>
          <div className="keen-slider__slide number-slide5">
            <Link>
              <div className="bg-white w-full h-[400px] p-2 mx-auto">
                <img
                  className="w-full h-[400px]"
                  src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                  alt=""
                />
                <h1 className="text-black text-center">Schools</h1>
              </div>
            </Link>
          </div>
          <div className="keen-slider__slide number-slide6">
            <Link>
              <div className="bg-white w-full h-[400px] p-2 mx-auto">
                <img
                  className="w-full h-[400px]"
                  src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                  alt=""
                />
                <h1 className="text-black text-center">Schools</h1>
              </div>
            </Link>
          </div>
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail mt-5">
          <div className="keen-slider__slide number-slide1">
            <div className="bg-white w-32 p-2 mx-auto">
              <img
                className="w-full h-fit"
                src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                alt=""
              />
              <h1 className="text-black text-center">Schools</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="bg-white w-32 p-2 mx-auto">
              <img
                className="w-full h-fit"
                src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                alt=""
              />
              <h1 className="text-black text-center">Schools</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="bg-white w-32 p-2 mx-auto">
              <img
                className="w-full h-fit"
                src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                alt=""
              />
              <h1 className="text-black text-center">Schools</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            <div className="bg-white w-32 p-2 mx-auto">
              <img
                className="w-full h-fit"
                src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                alt=""
              />
              <h1 className="text-black text-center">Schools</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="bg-white w-32 p-2 mx-auto">
              <img
                className="w-full h-fit"
                src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                alt=""
              />
              <h1 className="text-black text-center">Schools</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className="bg-white w-32 p-2 mx-auto">
              <img
                className="w-full h-fit"
                src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
                alt=""
              />
              <h1 className="text-black text-center">Schools</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex gap-10 overflow-x-auto">
        {Array(8)
          .fill(1)
          .map((item, index) => (
            <img
              key={index}
              className="w-72 h-96 object-cover rounded-lg"
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt=""
            />
          ))}
      </div> */}
    </div>
  );
};

export default Featured;
