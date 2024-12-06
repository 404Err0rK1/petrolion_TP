import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const ContactForm = () => {
  return (
    <section className="max-w-screen-xl mx-auto h-auto flex gap-10 py-20 mb-10">
      <div className="w-1/3 bg-lightGray h-auto px-10 py-20 border-b-[4px] border-b-black hover:shadow-2xl duration-300">
        <div>
          <h3 className="text-[32px] font-bold">
            Liên hệ với chúng tôi để biết thêm thông tin          </h3>
          <span className="w-1/4 h-2 bg-black inline-block"></span>
        </div>
        <div className="flex flex-col gap-2 mt-10">
          <p className="flex items-center gap-2 text-[16px] font-semibold w-4/5">
            <span>
              <MdOutlineMarkEmailUnread size={20} />
            </span>
            hotuanphat.dev@gmail.com
          </p>
          <p className="flex items-center gap-2 text-[16px] font-semibold w-4/5">
            <span>
              <FiPhoneCall size={20} />
            </span>
            +84 233 343 565
          </p>
          <p className="flex items-center gap-2 text-[16px] font-semibold w-4/5">
            <span >
              <FaRegMap size={20} />
            </span>
            77 cong hoa, Q1, TP.HCM
          </p>
        </div>
      </div>
      <div className="w-2/3 h-auto bg-white flex flex-col justify-between relative">
        <div className="flex justify-between gap-16">
          <input
            className="bg-lightGray w-1/2 py-3 font-semibold px-4 placeholder:text-darkLight"
            type="text"
            placeholder="Tên của bạn"
          />
          <input
            className="bg-lightGray w-1/2 py-3 font-semibold px-4 placeholder:text-darkLight"
            type="text"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="flex justify-between gap-16 relative">
          <input
            className="bg-lightGray w-1/2 py-3 font-semibold px-4 placeholder:text-darkLight"
            type="text"
            placeholder="Email"
          />
          <input
            className="bg-lightGray w-1/2 py-3 font-semibold px-4 placeholder:text-darkLight"
            type="text"
            placeholder="Địa chỉ"
          />

        </div>
        <div className="flex">
          <textarea
            className="w-full bg-lightGray py-3 font-semibold px-4 placeholder:text-darkLight resize-none"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Điền lời nhắn"
          ></textarea>
        </div>
        <button className="absolute w-[142px] h-[51px] flex justify-center items-center cursor-pointer hover:bg-topHeader duration-300 bg-black border-black border-[1px] text-white text-[18px] font-bold -bottom-20">
          Gửi
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
