import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { BsPlay } from "react-icons/bs";
import { servicesImgFour } from "../../assets/images/Assets";

const OurProducts = () => {
  return (
    <section>
      <div className="w-full h-auto py-20 mt-10">
        <div className="max-w-screen-xl mx-auto flex flex-row md:flex-nowrap flex-wrap gap-4 justify-between">
          <div className="w-full relative">
            <picture>
              <img src={servicesImgFour} alt="servicesImgFour" />
            </picture>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <div className="w-3/2">
              <h2 className="text-[36px] font-bold w-full leading-tight">
                Tại sao nên chọn dịch vụ bên chúng tôi?
              </h2>
              <p className="text-[16px] font-normal w-2/3 mt-4">
              Khi lựa chọn dịch vụ xăng dầu của chúng tôi, bạn đang chọn sự cam kết về chất lượng và độ tin cậy cao. Chúng tôi đảm bảo cung cấp sản phẩm đạt chuẩn và dịch vụ chuyên nghiệp từ đội ngũ giàu kinh nghiệm. Hãy để chúng tôi đồng hành cùng bạn trong mọi nhu cầu năng lượng.
              </p>
            </div>
            <div className="flex w-full">
              <ul className="flex flex-col justify-start gap-4 text-[16px] font-bold">
                <li className="flex justify-start items-center gap-4">
                  <span className="GiCheckMarkStyle">
                    <GiCheckMark />
                  </span>
                  Chất lượng đảm bảo                </li>
                <li className="flex justify-start items-center gap-4">
                  <span className="GiCheckMarkStyle">
                    <GiCheckMark />
                  </span>
                  Dịch vụ chuyên nghiệp                </li>
                <li className="flex justify-start items-center gap-4">
                  <span className="GiCheckMarkStyle">
                    <GiCheckMark />
                  </span>
                  Giải pháp tối ưu                </li>
                <li className="flex justify-start items-center gap-4">
                  <span className="GiCheckMarkStyle">
                    <GiCheckMark />
                  </span>
                  Phát triển bền vững                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
