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
      <div className="col-span-6 md:col-span-1 h-32 w-32 flex items-center" key={index}>
        <Image src={item.src} alt={item.alt} className="h-full w-full"></Image>
      </div>
    );
  });

  return (
    <div className="flex flex-col h-full bg-red-50">
      <div className="text-lg text-center my-12 text-brandcolor font-bold font-custom">
        SOME OF OUR LENDERS
      </div>
      <div className="grid grid-cols-6 gap-4 gap-20 px-0 md:px-3 justify-items-center content-center">
        { divImageArray }
      </div>
    </div>
  );
}
