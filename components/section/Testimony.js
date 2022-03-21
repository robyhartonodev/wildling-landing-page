import Image from "next/image";
import testimonyOne from "../../public/images/testimony-person-1.jpg";
import testimonyTwo from "../../public/images/testimony-person-2.jpg";
import testimonyThree from "../../public/images/testimony-person-3.jpg";

export default function Testimony({}) {
  const testimonies = [
    {
      src: testimonyOne,
      alt: "testimony-one",
      name: "Max Musterfrau",
      job: "Housewife",
    },
    {
      src: testimonyTwo,
      alt: "testimony-two",
      name: "Evan You",
      job: "Salesmen",
    },
    {
      src: testimonyThree,
      alt: "testimony-three",
      name: "Isabel Schmitt",
      job: "Athlete",
    },
  ];

  const divTestimonyArray = [];

  testimonies.forEach((item, index) => {
    divTestimonyArray.push(
      <div className="grid grid-cols-1 justify-items-center gap-y-5">
        <div className="text-center">
          <Image
            src={item.src}
            alt="testimony-one"
            className="rounded-md flex items-center justify-center w-full h-full"
          ></Image>
        </div>
        <div className="text-center">
          Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
          taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
          taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
          fanny pack vaporware.
        </div>
        <div className="w-8 bg-red-200 rounded-full h-1"></div>
        <div className="uppercase">{item.name}</div>
        <div className="text-gray-500">{item.job}</div>
      </div>
    );
  });

  return (
    <div className="p-5">
      <div className="grid grid-cols-1">
        <div className="text-6xl font-serif text-brandcolor text-center mb-8 col-span-2">
          Testimonies
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-5">
        {divTestimonyArray}
      </div>
    </div>
  );
}
