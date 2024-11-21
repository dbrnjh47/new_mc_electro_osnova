import Swiper from "swiper";
import {
  Autoplay,
  Mousewheel,
  Navigation,
  Thumbs,
  Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./swiper.scss";

window.Swiper = Swiper;
window.SwiperAutoplay = Autoplay;
window.SwiperMousewheel = Mousewheel;
window.SwiperNavigation = Navigation;
window.SwiperThumbs = Thumbs;
window.SwiperScrollbar = Scrollbar;