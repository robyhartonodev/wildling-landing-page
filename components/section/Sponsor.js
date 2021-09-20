import Image from "next/image";
import chaseLogo from "../../public/images/chase-logo.svg";
import asanaLogo from "../../public/images/asana-logo.svg";
import googleLogo from "../../public/images/google-logo.svg";
import buzzFeedLogo from "../../public/images/buzz-feed-logo.svg";
import togglLogo from "../../public/images/toggl-logo.svg";
import walmartLogo from "../../public/images/walmart-logo.svg";

export default function Sponsor({}) {
  return (
    <div className="flex flex-col h-72 bg-red-50">
      <div className="text-lg text-center my-12 text-brandcolor font-bold font-custom">
        SOME OF OUR LENDERS
      </div>
      <div className="flex flex-row justify-between space-x-3 p-5 items-center">
        <Image
          src={chaseLogo}
          alt="chase company logo"
          width={125}
          height={25}
        ></Image>
        <Image
          src={asanaLogo}
          alt="asana company logo"
          width={125}
          height={50}
        ></Image>
        <Image
          src={googleLogo}
          alt="google company logo"
          width={125}
          height={50}
        ></Image>
        <Image
          src={buzzFeedLogo}
          alt="buzzfeed company logo"
          width={125}
          height={25}
        ></Image>
        <Image
          src={togglLogo}
          alt="toggl company logo"
          width={125}
          height={100}
        ></Image>
        <Image
          src={walmartLogo}
          alt="walmart company logo"
          width={125}
          height={100}
        ></Image>
      </div>
    </div>
  );
}
