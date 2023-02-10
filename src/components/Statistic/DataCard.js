import React from "react";

import images from "../../constants/img";
// TODO: dynamic render this card
const DataCard = () => {
  return (
    <>
      <section id="first-section" className="py-6">
        <div className="container mx-auto px-2 flex gap-10 ">
          <div className="w-1/4 shadow-lg rounded-lg flex justify-between py-6 bg-white">
            <div className="px-6">
              <h3 className="opacity-50 uppercase">Total Traffic</h3>
              <p className="text-lg">123,456</p>
            </div>
            <div className="px-6">
              <img className="w-full" src={images.group17} alt="" />
            </div>
          </div>

          <div className="w-1/4 shadow-lg rounded-lg flex justify-between py-6 bg-white">
            <div className="px-6">
              <h3 className="opacity-50 uppercase">New User</h3>
              <p className="text-lg">2,345</p>
            </div>
            <div className="px-6">
              <img className="w-full" src={images.group1} alt="" />
            </div>
          </div>

          <div className="w-1/4 shadow-lg rounded-lg flex justify-between py-6 bg-white">
            <div className="px-6">
              <h3 className="opacity-50 uppercase">Sales</h3>
              <p className="text-lg">924</p>
            </div>
            <div className="px-6">
              <img className="w-full" src={images.group2} alt="" />
            </div>
          </div>

          <div className="w-1/4 shadow-lg rounded-lg flex justify-between py-6 bg-white">
            <div className="px-6">
              <h3 className="opacity-50 uppercase">Performance</h3>
              <p className="text-lg">48.65%</p>
            </div>
            <div className="px-6">
              <img className="w-full" src={images.group3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DataCard;
