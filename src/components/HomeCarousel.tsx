import { bg2, bg3, bg5 } from "../imports";
import { Carousel } from "flowbite-react";

const HomeCarousel = () => {
  return (
    <div className="h-[85vh] mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4">
      <Carousel>
        <img src={bg2} alt="..." className="h-full object-cover" />
        <img src={bg3} alt="..." className="h-full object-cover" />
        <img src={bg5} alt="..." className="h-full object-cover" />
        {/* <img src={bg1} alt="..." className="h-full object-cover" /> */}
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          className="h-full object-cover"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          className="h-full object-cover"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          className="h-full object-cover"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
