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

const DataCard = () => {
  return (
    <>
      <section id="first-section" className="py-6">
        <div className="container mx-auto px-2 flex gap-10 ">
          {DUMMY_DATA.map((data) => (
            <div className="w-1/4 shadow-lg rounded-lg flex justify-between py-6 bg-white">
              <div className="px-6">
                <h3 className="opacity-50 uppercase">{data.title}</h3>
                <p className="text-lg">{data.value}</p>
              </div>
              <div className="px-6">
                <img className="w-full" src={data.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default DataCard;
