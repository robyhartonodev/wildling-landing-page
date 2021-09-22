import Image from "next/image";
import wildlingProductOne from "../../public/images/wildling-product-image-11.jpg";
import wildlingProductTwo from "../../public/images/wildling-product-image-12.jpg";

export default function AboutUs({}) {
  return (
    <div className="h-full mt-12 p-5 md:p-20">
      <div className="grid grid-cols-2 justify-center gap-10 md:gap-20 h-full">
        <div className="col-span-2 md:col-span-1">
          <div className="font-custom text-brandcolor text-6xl mb-8">
            about us
          </div>
          <div className="font-custom text-brandcolor w-full mb-16">
            Improves lymphatic function, resulting in a naturally dewy, glowing
            complexion
          </div>
          <button className="btn-wildling-one mb-24">
            BUY NOW
          </button>
          <Image
            src={wildlingProductTwo}
            className="w-full h-full transition duration-300 ease-in-out transform hover:-translate-y-5 hover:scale-120"
            alt="wildling product two"
          ></Image>
        </div>

        <div className="col-span-2 md:col-span-1">
          <Image
            src={wildlingProductOne}
            className="w-full h-full transition duration-300 ease-in-out transform hover:translate-y-5 hover:scale-120"
            alt="wildling product one"
          ></Image>
          <p className="text-left mt-8 mb-8 font-custom w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn-wildling-two">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
