export default function Number({}) {
  return (
    <div className="grid grid-cols-3 h-full bg-red-50 gap-5 p-5 md:divide-brandcolor divide-x-0 md:divide-x-4">
      <div className="col-span-3 md:col-span-1">
          <div className="mb-8 text-5xl text-brandcolor font-bold text-center font-custom">500+</div>
          <div className="text-gray-400 text-center font-custom">Organic Products</div>
      </div>
      <div className="col-span-3 md:col-span-1">
          <div className="mb-8 text-5xl text-brandcolor font-bold text-center font-custom">100+</div>
          <div className="text-gray-400 text-center font-custom">International Franchises</div>
      </div>
      <div className="col-span-3 md:col-span-1">
          <div className="mb-8 text-5xl text-brandcolor font-bold text-center font-custom">1 Million+</div>
          <div className="text-gray-400 text-center font-custom">Sales through-out the World</div>
      </div>
    </div>
  );
}
