import Image from "next/image";
import wildlingProductOne from "../../public/images/wildling-product-image-3.jpg";

export default function ProductOverlap({}) {
  return (
    <div className="p-20 h-screen mt-16">
      <div className="grid grid-cols-2 h-full gap-20">
        <div className="relative w-full">
          <div className="bg-red-200 overflow-auto w-full h-full"></div>
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-24 w-full h-5/6">
            <Image
              src={wildlingProductOne}
              alt="wildling-product-image"
              className="w-full h-full"
            ></Image>
          </div>
          {/* <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-8 bg-red-500 w-16 h-16"></div> */}
        </div>
        <div className="w-full">
          <div className="text-4xl font-custom text-brandcolor">
            We provide you <br />
            the best taste
          </div>
          <div className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="mt-16">
            <button className="btn-wildling-one">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
