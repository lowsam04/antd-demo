import React from "react";

import images from "../../constants/img";

const DUMMY_DATA = [
  {
    key: "1",
    title: "Total Traffic",
    value: "123,456",
    img: images.group17,
  },
  {
    key: "2",
    title: "New User",
    value: "2,345",
    img: images.group1,
  },
  {
    key: "3",
    title: "Sales",
    value: "924",
    img: images.group2,
  },
  {
    key: "4",
    title: "Performance",
    value: "48.65%",
    img: images.group3,
  },
];

const dummy = DUMMY_DATA.map((data) => (
  <div
    className="w-1/4 shadow-lg rounded-lg py-6 bg-white flex justify-between max-[414px]:w-11/12 mx-auto "
    key={data.key}
  >
    <div className="px-6">
      <h3 className="opacity-50 uppercase">{data.title}</h3>
      <p className="text-lg">{data.value}</p>
    </div>
    <div className="px-6">
      <img className="w-full" src={data.img} alt="" />
    </div>
  </div>
));

const StatisticCard = () => {
  return (
    <>
      <section id="first-section" className="py-6">
        <div className="px-2 gap-10 flex container mx-auto max-[414px]:flex-col">
          {dummy}
        </div>
      </section>
    </>
  );
};
export default StatisticCard;
