export default function Nav({ children }) {
  return (
    <nav className="">
      <div className="bg-hero-wildling h-screen">
        <div className="flex items-center justify-between px-24 py-6">
          {/* Wildling */}
          <div className="font-bold">WILDLING</div>
          {/* Navigation item */}
          <div className="flex flex-row space-x-8">
            <div>Manufacturing</div>
            <div>Packaging</div>
            <div>Farms</div>
            <div>Delivery</div>
          </div>
          {/* Action bar */}
          <div className="flex flex-row space-x-3">
            <div>logo1</div>
            <div>logo2</div>
            <div>logo3</div>
          </div>
        </div>
      </div>
      {/* <img
        className="object-contain h-full w-full"
        src="/images/wildling-hero-image-2.jpg"
      ></img> */}
    </nav>
  );
}
