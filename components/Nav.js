import { FaTwitter, FaFacebookF, FaInstagram, FaRegUser, FaShoppingCart, FaAlignJustify, FaSearch } from 'react-icons/fa';

export default function Nav({ children }) {
  return (
    <nav className="">
      <div className="bg-hero-wildling h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-24 py-6">
          {/* Wildling */}
          <div className="flex font-bold font-custom text-brandcolor text-xl">WILDLING</div>
          {/* Navigation item */}
          <div className="flex flex-row space-x-12 font-custom font-extralight text-brandcolor">
            <div className="cursor-pointer hover:underline">Manufacturing</div>
            <div className="cursor-pointer hover:underline">Packaging</div>
            <div className="cursor-pointer hover:underline">Farms</div>
            <div className="cursor-pointer hover:underline">Delivery</div>
          </div>
          {/* Action bar */}
          <div className="flex flex-row space-x-5 text-brandcolor">
            <div className="cursor-pointer"><FaRegUser></FaRegUser></div>
            <div className="cursor-pointer"><FaShoppingCart></FaShoppingCart></div>
            <div className="cursor-pointer"><FaAlignJustify></FaAlignJustify></div>
          </div>
        </div>

        {/* Title */}
        <div className="flex justify-center mt-16">
          <div className="text-7xl text-brandcolor font-bold">Protecting the beauty!</div>
        </div>

        <div className="grid grid-cols-3 gap-6 px-20 py-12 text-brandcolor">
          <div>
            <div className="font-custom mb-4">It increases circulation and improves lymphatic function, resulting in a natural dewy, glowing complexion.</div>
            <div className="font-custom mb-6">Gua Sha can also be used to prevent and clear acne, decongesting the skin and lessening inflammation.</div>
            <div className="p-3 bg-white flex flex-row w-72 mb-16 justify-between">
              <input className="border-0" type="text" placeholder="Search here..."></input>
              <button className="p-3 bg-brandcolor text-white rounded-none"><FaSearch></FaSearch></button>
            </div>
            <button className="bg-brandcolor p-3 w-48 font-serif text-white shadow-lg rounded-none">VIEW DETAIL</button>
          </div>
          <div></div>
          <div className="mt-40">
            <div className="font-bold">The best for</div>
            <div>It can also be used to prevent and clear acne, decongesting skin.</div>
          </div>
        </div>

        {/* social media stuffs */}
        <div className="grid grid-cols-1 text-right p-10 space-y-5 text-brandcolor justify-items-end">
          <div className="cursor-pointer"><FaTwitter></FaTwitter></div>
          <div className="cursor-pointer"><FaFacebookF></FaFacebookF></div>
          <div className="cursor-pointer"><FaInstagram></FaInstagram></div>
        </div>
      </div>
    </nav>
  );
}
