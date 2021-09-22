import Image from "next/image";
import chaseLogo from "../../public/images/chase-logo.svg";
import asanaLogo from "../../public/images/asana-logo.svg";
import googleLogo from "../../public/images/google-logo.svg";
import buzzFeedLogo from "../../public/images/buzz-feed-logo.svg";
import togglLogo from "../../public/images/toggl-logo.svg";
import walmartLogo from "../../public/images/walmart-logo.svg";

export default function Sponsor({}) {
  const images = [
    { src: chaseLogo, alt: "chase company logo" },
    { src: asanaLogo, alt: "chase company logo" },
    { src: googleLogo, alt: "chase company logo" },
    { src: buzzFeedLogo, alt: "chase company logo" },
    { src: togglLogo, alt: "chase company logo" },
    { src: walmartLogo, alt: "chase company logo" },
  ];

  let divImageArray = [];

  images.forEach((item, index) => {
    divImageArray.push(
      <div className="col-span-2 md:col-span-1" key={index}>
        <Image src={item.src} alt={item.alt} className="h-full"></Image>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 h-full bg-red-50">
      <div className="text-lg text-center my-12 text-brandcolor font-bold font-custom">
        SOME OF OUR LENDERS
      </div>
      <div className="grid grid-cols-6 gap-20 px-3 items-center">
        { divImageArray }
      </div>
    </div>
  );
}
