import { useSwiper } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/md";
function NextButton() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} className="text-white text-3xl">
      <MdKeyboardArrowRight />
    </button>
  );
}

export default NextButton;
