import Image from "next/image";
import wildlingProductOne from "../../public/images/wildling-product-image-13.jpg";
import wildlingProductTwo from "../../public/images/wildling-product-image-6.jpg";

export default function Product({}) {
  return (
    <div className="p-3 md:p-20 h-full">
      <div className="grid grid-cols-2 justify-center gap-5 md:gap-20">
        <div className="text-6xl font-serif text-brandcolor text-center mb-8 col-span-2">
          products
        </div>
        <div className="text-center mb-8 col-span-2">
          Improves lymphatic function, resulting in a naturally dews, glowing
          complexion
        </div>

        {/* product one */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src={wildlingProductOne}
            className="w-full transition duration-300 ease-in-out transform hover:-translate-y-5 hover:scale-120"
            height={1200}
            alt="wildling product one"
          ></Image>
          <div className="text-4xl font-serif text-brandcolor mb-8 mt-8">
            express tonic
          </div>
          <div className="font-custom mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="grid grid-cols-3 justify-between gap-5 mb-16">
            <div>
              <div className="w-full text-bluegray-700 text-3xl font-bold">
                100%
              </div>
              <div className="w-16 h-1 bg-brandcolor"></div>
              <div className="w-full text-sm text-gray-400">
                Organic products
              </div>
            </div>
            <div>
              <div className="w-full text-bluegray-700 text-3xl font-bold">
                1M +
              </div>
              <div className="w-16 h-1 bg-brandcolor"></div>
              <div className="w-full text-sm text-gray-400">Verify Sales</div>
            </div>
            <div>
              <div className="w-full text-bluegray-700 text-3xl font-bold">
                95%
              </div>
              <div className="w-16 h-1 bg-brandcolor"></div>
              <div className="w-full text-sm text-gray-400">Happy Customer</div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-1 md:gap-3">
            <button className="btn-wildling-one col-span-2 md:col-span-1">BUY NOW</button>
            <button className="btn-wildling-two col-span-2 md:col-span-1">ADD TO CART</button>
          </div>
        </div>

        {/* product two */}
        <div className="h-full col-span-2 md:col-span-1">
          <Image
            src={wildlingProductTwo}
            className="w-full transition duration-300 ease-in-out transform hover:translate-y-5 hover:scale-120"
            height={1200}
            alt="wildling product one"
          ></Image>
          <div className="text-4xl font-serif text-brandcolor mb-8 mt-8">
            higher self oil
          </div>
          <div className="font-custom mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="grid grid-flow-col justify-between gap-5 mb-16">
            <div>
              <div className="w-full text-bluegray-700 text-3xl font-bold">
                100%
              </div>
              <div className="w-16 h-1 bg-brandcolor"></div>
              <div className="w-full text-sm text-gray-400">
                Organic products
              </div>
            </div>
            <div>
              <div className="w-full text-bluegray-700 text-3xl font-bold">
                1M +
              </div>
              <div className="w-16 h-1 bg-brandcolor"></div>
              <div className="w-full text-sm text-gray-400">Verify Sales</div>
            </div>
            <div>
              <div className="w-full text-bluegray-700 text-3xl font-bold">
                95%
              </div>
              <div className="w-16 h-1 bg-brandcolor"></div>
              <div className="w-full text-sm text-gray-400">Happy Customer</div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-3">
            <button className="btn-wildling-one col-span-2 md:col-span-1">BUY NOW</button>
            <button className="btn-wildling-two col-span-2 md:col-span-1">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
