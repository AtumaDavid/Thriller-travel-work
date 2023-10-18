// import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsCardChecklist } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageOne from "../assets/house1.jpg";

export default function Dashboard() {
  const items = [
    {
      id: 1,
      image: imageOne,
      Title: "Montmartre, France",
      desc: "Visiting the best tourist areas chosen by the audience",
      price: "$450,000,00",
    },
    {
      id: 2,
      image: imageOne,
      Title: "Instanbol, Turkey",
      desc: "One of the best selling tours to Turkey and visiting its regions",
    },
    {
      id: 3,
      image: imageOne,
      Title: "London, UK",
      desc: "London is one of the most beautiful places to visit",
    },
    {
      id: 4,
      image: imageOne,
      Title: "Destinations four",
      desc: "and one more beautiful place to visit",
    },
    {
      id: 5,
      image: imageOne,
      Title: "Destinations five",
      desc: "last but not least, a beautiful place to visit",
    },
    {
      id: 6,
      image: imageOne,
      Title: "Destinations five",
      desc: "last but not least, a beautiful place to visit",
    },
  ];

  const chunkSize = 3;
  const chunkedItems = [];

  for (let i = 0; i < items.length; i += chunkSize) {
    chunkedItems.push(items.slice(i, i + chunkSize));
  }

  return (
    <div className="w-[95%] mx-auto relative">
      <img
        src="/src/assets/bg-image.jpg"
        alt="bg-image"
        className="w-full h-56 object-cover rounded-lg"
      />
      <div className="absolute w-5/6 h-[15%] bg-white top-56 rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-4">
        <div className="flex items-center border-r border-gray-300 pr-2">
          <SlLocationPin className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Where are you going"
            className="bg-white focus:outline-none"
          />
        </div>
        <div className="flex items-center border-r border-gray-300 pr-2">
          <BsCardChecklist className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Check in date"
            className="bg-white focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <CgProfile className="text-gray-400 mr-2" />
          <select className="bg-white focus:outline-none">
            <option value="" disabled>
              No. of people
            </option>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
          </select>
        </div>
        <Button size="large" className="bg-blue-800 text-white">
          Search
        </Button>
      </div>
      <div className="mt-16">
        <h1 className="text-3xl font-semibold mb-4">Trending Destinations</h1>
        <div className="mx-5 absolute carousel-container">
          <Carousel
            showThumbs={true}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000} //time interval
            showArrows={true}
          >
            {chunkedItems.map((chunk, index) => (
              <div key={index}>
                <div className="flex gap-5">
                  {chunk.map((item) => (
                    <div
                      key={item.id}
                      className=" flex gap-5 border border-white bg-white h-40 rounded-2xl w-1/2"
                    >
                      <div className="flex items-center ml-5">
                        <img
                          src={item.image}
                          alt={`Image ${item.id}`}
                          className="w-full h-28 object-cover rounded-2xl"
                        />
                      </div>
                      <div className="justify-center flex flex-col">
                        <h2 className="font-semibold">{item.Title}</h2>
                        <p className="text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="mt-44">
          <div className="flex justify-between items-center ">
            <h1 className="text-3xl font-semibold">Best offers</h1>
            <a href="#" className="text-black">
              View All
            </a>
          </div>
          <div className="flex space-x-4">
            {items.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="flex-1 border border-white bg-white p-4 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-2">{item.Title}</h2>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
