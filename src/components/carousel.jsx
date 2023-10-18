import PropTypes from "prop-types";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = ({ items }) => {
  return (
    <Carousel
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      infiniteLoop
    >
      {items.map((item, index) => (
        <div key={index} className="bg-gray-100 p-4 mx-2">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-2 text-lg font-semibold text-center">
            {item.title}
          </h3>
        </div>
      ))}
    </Carousel>
  );
};

CarouselSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselSlider;
