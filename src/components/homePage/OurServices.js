import React from "react";
import LearnMore from "../buttons/LearnMore";

const OurServices = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-6 lg:gap-0">
        <div className="w-3/4 lg:w-2/4  py-16 flex flex-col justify-center items-start lg:items-center">
          <h3 className="font-bold text-[46px] md:text-[64px]">Dịch vụ</h3>
          <p className="font-medium text-base w-full lg:w-[405px]">
            Petrolion cung cấp một loạt các dịch vụ trong lĩnh vực xăng dầu nhằm đảm bảo rằng khách hàng nhận được những sản phẩm chất lượng cao và dịch vụ tin cậy          </p>
        </div>
        <div
          className="w-3/4 lg:w-2/4  h-[410px] text-white"
          style={{
            background: "url(assets/servicesBgOne.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight flex flex-col justify-center px-8">
            <h1 className="text-[36px] font-bold mb-4">
            Cung cấp nhiên liệu
            </h1>
            <LearnMore />
          </div>
        </div>
        <div
          className="w-3/4 lg:w-2/4  h-[410px] text-white"
          style={{
            background: "url(assets/servicesBgTwo.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight flex flex-col justify-center px-8">
            <h1 className="text-[36px] font-bold mb-4">
            Dịch vụ vận chuyển
            </h1>
            <LearnMore />
          </div>
        </div>
        <div
          className="w-3/4 lg:w-2/4  h-[410px] text-white"
          style={{
            background: "url(assets/servicesBgThree.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight  flex flex-col justify-center px-8">
            <h1 className="text-[36px] font-bold mb-4">
            Giải pháp lưu trữ
            </h1>
            <LearnMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
