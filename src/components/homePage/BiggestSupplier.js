import React from "react";
import {
  servicesImgOne,
  servicesImgTwo,
  servicesImgThree,
  servicesImgFour,
} from "../../assets/images/Assets";

const BiggestSupplier = () => {
  const servicePhoto = [
    {
      id: 10001,
      image: servicesImgOne,
    },
    {
      id: 10002,
      image: servicesImgTwo,
    },
    {
      id: 10003,
      image: servicesImgThree,
    },
    {
      id: 10004,
      image: servicesImgFour,
    },
  ];
  return (
    <section className="w-full mx-auto">
      <div className="max-w-screen-xl py-20 mx-auto flex flex-col lg:flex-row justify-start md:gap-10 lg:gap-20 items-center px-6 xl:px-0">
        <div className="w-full lg:w-2/4">
          <h2 className="text-[48px] font-bold">
            Nhà cung cấp lớn trong nước
          </h2>
        </div>
        <div className="w-full lg:w-2/4">
          <p className="text-[16px] font-medium text-[#6C6C6C]">
          Petrolion là một công ty hàng đầu trong ngành công nghiệp xăng dầu, chuyên cung cấp và phân phối các sản phẩm dầu khí chất lượng cao. Công ty tự hào với cơ sở hạ tầng vững chắc, đảm bảo dịch vụ đáng tin cậy và hiệu quả cho khách hàng. Với cam kết mạnh mẽ về phát triển bền vững, Petrolion luôn áp dụng các biện pháp đổi mới để giảm thiểu tác động đến môi trường.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        {servicePhoto.map((item,index) => (
          <div className="overflow-hidden" key={index}>
            <picture>
              <img
                className="w-full h-full hover:scale-125   duration-500 cursor-pointer"
                src={item.image}
                loading="lazy"
                alt="servicesImgOne"
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BiggestSupplier;
