import React from "react";
import { GoChevronRight } from "react-icons/go";

const Blog = () => {
  return (
    <section className="w-full h-auto py-28 bg-lightGray mx-auto">
      <div className="max-w-screen-xl h-full mx-auto flex flex-col lg:flex-row px-0 lg:px-6 justify-between items-center gap-8">
        <div
          className="w-2/3 min-h-[500px] lg:w-1/3 h-auto text-white"
          style={{
            background: "url(assets/blogBgOne.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full min-h-[500px] bg-darkLight flex flex-col justify-center px-20 py-20">
            <h1 className="text-[24px] h-[70%] font-bold mb-4">
              Dịch vụ rất nhanh chóng và chuyên nghiệp. Tôi hoàn toàn hài lòng với chất lượng nhiên liệu.
            </h1>
            <button className="w-[142px] h-[51px] flex justify-center items-center cursor-pointer hover:bg-topHeader duration-300 bg-white/50 text-[16px] text-white font-semibold mt-4">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="w-2/3 min-h-[500px] lg:w-1/3 h-auto text-white"
          style={{
            background: "url(assets/blogBgTwo.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full min-h-[500px] h-full bg-darkLight flex flex-col justify-center px-20 py-20">
            <h1 className="text-[24px] h-[70%] font-bold mb-4">
              Nhân viên tận tâm và nhiệt tình, luôn hỗ trợ khi cần. Rất hài lòng với trải nghiệm của mình.
            </h1>
            <button className="w-[142px] h-[51px] flex justify-center items-center cursor-pointer hover:bg-topHeader duration-300 bg-white/50 text-[16px] text-white font-semibold mt-4">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="w-2/3 min-h-[500px] lg:w-1/3 h-auto text-white"
          style={{
            background: "url(assets/blogBgThree.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full min-h-[500px] bg-darkLight flex flex-col justify-center px-20 py-20">
            <h1 className="text-[24px] h-[70%] font-bold mb-4">
              Giá cả hợp lý và dịch vụ vận chuyển rất đáng tin cậy. Sẽ tiếp tục sử dụng dịch vụ của Petrolion.
            </h1>
            <button className="w-[142px] h-[51px] flex justify-center items-center cursor-pointer hover:bg-topHeader duration-300 bg-white/50 text-[16px] text-white font-semibold mt-4">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 flex justify-center lg:justify-end font-bold text-[16px] uppercase mt-4">
        <h3 className="flex justify-end items-center">
          Xemt thêm{" "}
          <span>
            <GoChevronRight size={20} />
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Blog;
