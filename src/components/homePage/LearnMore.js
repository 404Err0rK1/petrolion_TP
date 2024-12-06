import React from "react";

const LearnMore = () => {
  return (
    <section className="w-full bg-lightGray h-auto py-20">
      <div className="max-w-screen-xl h-[400px] mx-auto flex flex-col bg-yellow-400 lg:flex-row items-center lg:h-[360px]">
        <div className="w-full h-1/2 lg:h-full lg:w-2/5 bg-black flex justify-center items-center">
          <h2 className="text-white text-[36px] font-bold p-6 lg:p-24">
          Tìm hiểu thêm về công ty của chúng tôi.
          </h2>
        </div>
        <div
          className="w-full h-1/2 lg:h-full lg:w-3/5 flex justify-center items-center"
          style={{
            background: "url(assets/learnMore.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="w-[142px] h-[51px] flex justify-center items-center text-black text-[16px] font-semibold cursor-pointer hover:bg-orange-500 duration-300 bg-white">
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
