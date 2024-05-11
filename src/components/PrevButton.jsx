import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
function PrevButton() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} className="text-white text-3xl">
      <MdKeyboardArrowLeft />
    </button>
  );
}

export default PrevButton;
