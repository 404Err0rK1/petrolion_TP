import React from "react";
import { certificateOne, certificateTwo } from "../../assets/images/Assets";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa";
import { logoImg } from "../../assets/images/Assets";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { headerLinks } from "../../constants";
import { Link } from "react-router-dom";
import ContactButton from "../buttons/ContactButton";

const Footer = () => {
  return (
    <section>
      <div className="w-full bg-black border-b-[5px] border-b-orange-500 text-white">
        <div className="max-w-screen-xl h-full py-4 px-6 xl:px-0 mx-auto flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-center lg:text-left text-[38px] xl:text-[42px] font-bold mb-4 lg:mb-0">
            Bạn muốn đăng ký làm chi nhánh thành viên?
          </h1>
          <Link to="/contact">
            <ContactButton />
          </Link>
        </div>
      </div>
      <div className="w-full bg-white">
        {/* Footer Top */}
        <div className="max-w-screen-xl mx-auto py-24 text-black gap-10 lg:gap-0 flex flex-col md:flex-row flex-wrap px-6 xl:px-0 justify-start items-center">
          <div className="w-full lg:w-2/5 flex flex-col justify-center h-full gap-8 border-b-[1px] border-b-lightGray py-4 lg:py-0 lg:border-b-0">
            <div>
              <img
                src={logoImg}
                alt="logoImg"
                className="w-[300px] lg:w-[200px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-[20px] lg:text-[14px] font-normal">
                <span>
                  <MdOutlineMarkEmailUnread size={20} />
                </span>
                hotuanphat.dev@gmail.com
              </p>
              <p className="flex items-center gap-2 text-[20px] lg:text-[14px] font-normal">
                <span>
                  <FiPhoneCall size={20} />
                </span>
                +84 345 234 234
              </p>
              <p className="flex items-center gap-2 text-[20px] lg:text-[14px] font-normal">
                <span>
                  <FaRegMap size={20} />
                </span>
                77 cong hoa, Q1, TP.HCM
              </p>
            </div>
            <div className="flex gap-4">
              <span className="bg-black w-16 lg:w-12 h-16 lg:h-12 flex justify-center items-center rounded-full border-[1px] border-black hover:bg-darkBg cursor-pointer duration-300">
                <FaFacebookF size={24} className="text-white" />
              </span>
              <span className="bg-black w-16 lg:w-12 h-16 lg:h-12 flex justify-center items-center rounded-full border-[1px] border-black hover:bg-darkBg cursor-pointer duration-300">
                <FaTwitter size={24} className="text-white" />
              </span>
              <span className="bg-black w-16 lg:w-12 h-16 lg:h-12 flex justify-center items-center rounded-full border-[1px] border-black hover:bg-darkBg cursor-pointer duration-300">
                <FaLinkedinIn size={24} className="text-white" />
              </span>
              <span className="bg-black w-16 lg:w-12 h-16 lg:h-12 flex justify-center items-center rounded-full border-[1px] border-black hover:bg-darkBg cursor-pointer duration-300">
                <FaInstagram size={24} className="text-white" />
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/5 border-b-[1px] border-b-lightGray py-4 lg:py-0 lg:border-b-0">
            <h3 className="font-bold text-[32px] lg:text-[18px] mb-6">
              Công ty
            </h3>
            <ul className="flex flex-col gap-4 text-[24px] lg:text-[16px] font-semibold">
              {headerLinks.map((header) => (
                <li
                  className="hover:text-black duration-300"
                  key={header.id}
                >
                  <Link to={header.link}>{header.title} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/5 border-b-[1px] border-b-lightGray py-4 lg:py-0 lg:border-b-0">
            <h3 className="font-bold text-[32px] lg:text-[18px] mb-6">
              Thông tin khác
            </h3>
            <ul className="flex flex-col gap-4 text-[24px] lg:text-[16px] font-semibold">
              <li className="hover:text-black duration-300 cursor-pointer">
                Trách nhiệm
              </li>
              <li className="hover:text-black duration-300 cursor-pointer">
                Liên hệ
              </li>
              <li className="hover:text-black duration-300 cursor-pointer">
                Điều khoản & Điều kiện
              </li>
              <li className="hover:text-black duration-300 cursor-pointer">
                Chính sách bảo mật
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 border-b-[1px] border-b-lightGray py-4 lg:py-0 lg:border-b-0">
            <h3 className="font-bold text-[32px] lg:text-[18px] mb-6">
              Giấy chứng nhận
            </h3>
            <div className="flex gap-2">
              <picture>
                <img
                  src={certificateOne}
                  className="w-[180px] lg:w-[100px]"
                  alt="certificateOne"
                />
              </picture>
              <picture>
                <img
                  src={certificateTwo}
                  className="w-[180px] lg:w-[100px]"
                  alt="certificateOne"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#282828] h-[90px]">
        <div className="max-w-screen-xl h-full mx-auto flex justify-start items-center">
          <p className="text-[#6C6C6C] text-[16px] font-medium flex justify-center items-center gap-1 hover:text-lightGray duration-300">
            <span className="mt-1">
              <AiOutlineCopyrightCircle size={18} />
            </span>
            Copyright 2023 by Ho Tuan PHat - All right reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
