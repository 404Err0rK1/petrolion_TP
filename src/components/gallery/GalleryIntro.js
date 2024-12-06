import React from "react";
import AboutUsButton from "../buttons/AboutUsButton";

const GalleryIntro = () => {
  return (
    <section>
      <div
        className="w-full h-[300px]"
        style={{
          background: "url(assets/servicesBgOne.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-darkLight2 flex justify-center items-center">
          <h1 className="text-white text-[42px] font-bold">Trưng bày</h1>
        </div>
      </div>
      <div className="max-w-screen-xl py-20 mx-auto flex justify-start gap-20 items-center">
        <div className="w-1/4">
          <AboutUsButton />
        </div>
        <div className="w-3/4">
          <p className="text-[16px] font-medium text-[#6C6C6C] text-justify">
            Trưng bày các hình ảnh về xăng dầu giúp khách hàng hiểu rõ hơn về quy trình và sản phẩm của chúng tôi. Những hình ảnh này thể hiện sự chuyên nghiệp và cam kết chất lượng của Petrolion trong từng chi tiết.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryIntro;
