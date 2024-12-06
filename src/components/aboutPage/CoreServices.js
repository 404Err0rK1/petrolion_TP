import React from "react";
import { BsBuilding } from "react-icons/bs";
import { GiOilPump } from "react-icons/gi";
import { RiCommunityLine } from "react-icons/ri";
import LearnMoreIcon from "../buttons/LearnMoreIcon";

const CoreServices = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto flex flex-col">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <h1 className="text-[64px] font-bold">Dịch vụ</h1>
        </div>
        <div className="flex gap-16 mt-20">
          <div className="w-1/3 bg-white shadow-lg hover:shadow-2xl relative py-24 px-10 duration-300">
            <p className="coreServicesIcon">
              <BsBuilding size={35} />
            </p>
            <h3 className="text-[24px] font-bold">
              Cung cấp nhiên liệu
            </h3>
            <p className="text-[16px] mt-2">
              Petrolion cung cấp xăng, dầu diesel và các loại nhiên liệu dầu khác cho các doanh nghiệp và cá nhân.
            </p>
            <div className="absolute bottom-6 right-12">
              <LearnMoreIcon />
            </div>
          </div>
          <div className="w-1/3 bg-white shadow-lg hover:shadow-2xl relative py-24 px-10 duration-300">
            <p className="coreServicesIcon">
              <GiOilPump size={35} />
            </p>
            <h3 className="text-[24px] font-bold">
              Dịch vụ vận chuyển
            </h3>
            <p className="text-[16px] mt-2">
              Đảm bảo vận chuyển an toàn và kịp thời nhiên liệu đến các trạm xăng và khách hàng.
            </p>
            <div className="absolute bottom-6 right-12">
              <LearnMoreIcon />
            </div>
          </div>
          <div className="w-1/3 bg-white shadow-lg hover:shadow-2xl relative py-24 px-1 duration-300">
            <p className="coreServicesIcon">
              <RiCommunityLine size={35} />
            </p>
            <h3 className="text-[24px] font-bold">
              Giải pháp lưu trữ
            </h3>
            <p className="text-[16px] mt-2">
              Quản lý kho bãi đạt tiêu chuẩn an toàn, bảo vệ môi trường và chất lượng nhiên liệu.
            </p>
            <div className="absolute bottom-6 right-12">
              <LearnMoreIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
