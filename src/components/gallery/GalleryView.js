import React from "react";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
} from "../../assets/images/Assets";

const GalleryView = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-wrap gap-6 grow justify-center items-center mb-32">
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={gallery1} alt="servicesImgOne" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={gallery2} alt="servicesImgTwo" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img
          className="galleryImg"
          src={gallery3}
          alt="servicesImgThree"
        />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img
          className="galleryImg"
          src={gallery4}
          alt="servicesImgFour"
        />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={gallery5} alt="learnMoreImg" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={gallery6} alt="servicesImgOne" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={gallery7} alt="servicesImgTwo" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img
          className="galleryImg"
          src={gallery8}
          alt="servicesImgThree"
        />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img
          className="galleryImg"
          src={gallery9}
          alt="servicesImgFour"
        />
      </picture>
    </div>
  );
};

export default GalleryView;
