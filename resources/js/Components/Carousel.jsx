import Sliderright from "../../../public/Assets/SliderRight.svg";
import Sliderleft from "../../../public/Assets/SliderLeft.svg";
import { useState } from "react";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        {/* Tombol Kiri */}
        <img src={Sliderleft} alt="Previous Slide" className="cursor-pointer" onClick={prev} />

        {/* Kontainer Carousel */}
        <div className="max-w-[927px]">
          <div className="overflow-hidden relative">
            {/* Slide Kontainer */}
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {slides}
            </div>

            {/* Tombol Navigasi */}
            <div className="flex flex-row w-full absolute bottom-12 justify-center z-30">
              {slides.map((_, i) => (
                <div
                  key={"circle" + i}
                  className={`bg-white rounded-full w-3 h-3 m-2 cursor-pointer ${
                    curr === i ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setCurr(i)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Tombol Kanan */}
        <img src={Sliderright} alt="Next Slide" className="cursor-pointer" onClick={next} />
      </div>
    </>
  );
};

export default Carousel;
