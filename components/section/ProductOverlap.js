import Image from "next/image";
import wildlingProductOne from "../../public/images/wildling-product-image-3.jpg";

export default function ProductOverlap({}) {
  return (
    <div className="p-3 md:p-20 h-full mt-16 mb-16">
      <div className="grid grid-cols-2 h-full gap-10 md:gap-20">
        <div className="relative mb-96 col-span-2 md:col-span-1">
          <div className="bg-red-200 overflow-auto w-full h-full invisible md:visible"></div>
          <div className="absolute top-0 right-0 md:transform md:translate-x-8 md:-translate-y-24 w-full h-5/6">
            <Image
              src={wildlingProductOne}
              alt="wildling-product-image"
            ></Image>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 mt-24">
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
