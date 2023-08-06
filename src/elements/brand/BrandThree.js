import React from "react";
import ImageJasaRaharja from "../../assets/images/JasaRaharja.png";
import ImageLabMedika from "../../assets/images/LabMedika.png";
import ImageMBI from "../../assets/images/MBI.png";
import ImagePupr from "../../assets/images/PUPR.png";
import ImageSocfin from "../../assets/images/Socfin.png";
import ImagePln from "../../assets/images/logopln.png";
import ImagePlnIP from "../../assets/images/pln-ip.png";
import ImageUp from "../../assets/images/up-malay.png";

const BrandList = [
  {
    image: ImageUp,
  },
  {
    image: ImageLabMedika,
  },
  {
    image: ImagePupr,
  },
  {
    image: ImageSocfin,
  },
];

const BrandList3 = [
  {
    image: ImageUp,
  },
  {
    image: ImageLabMedika,
  },
  {
    image: ImagePupr,
  },
];

const BrandList2 = [
  {
    image: ImageMBI,
  },
  {
    image: ImagePlnIP,
  },
  {
    image: ImageJasaRaharja,
  },
  {
    image: ImagePln,
  },
];

const BrandThree = ({ brandStyle }) => {
  return (
    <>
      <ul className={`brand-list ${brandStyle}`}>
        {BrandList.map((data, index) => (
          <li key={index}>
            <a href="#">
              <img src={`${data.image}`} alt="Brand Image" />
            </a>
          </li>
        ))}
      </ul>
      <ul className={`brand-list ${brandStyle}`}>
        {BrandList2.map((data, index) => (
          <li key={index}>
            <a href="#">
              <img src={`${data.image}`} alt="Brand Image" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BrandThree;
