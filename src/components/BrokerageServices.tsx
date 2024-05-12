import { IoIosArrowForward } from "react-icons/io";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { GiWhaleTail } from "react-icons/gi";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const BrokerageServices = () => {
  const brokerageServices = [
    {
      title: "Real Estate",
      description: [
        "Maximize property appeal with aerial images that showcase property layouts, proximity to amenities, and the surrounding landscape. Ideal for realtors and property developers in St Simons Island and Southport, these photographs can significantly enhance listing attractiveness and help properties stand out in competitive markets.",
      ],
      icon: AiTwotoneHome,
    },
    {
      title: "Event Photography",
      description: [
        "Elevate the coverage of your outdoor events with breathtaking aerial shots. Perfect for weddings, festivals, and corporate events in St Simons Island and Southport, aerial photography offers a grand perspective that adds a layer of sophistication to any event documentation.",
      ],
      icon: MdOutlineEmojiEvents,
    },
    {
      title: "Environmental Studies",
      description: [
        "Support environmental projects and conservation efforts with detailed aerial images that can track changes over time, monitor wildlife, and assess ecological impacts. This service is invaluable for researchers and environmental organizations operating in and around St Simons Island and Southport.",
      ],
      icon: GiWhaleTail,
    },
  ];

  const [description, setDescription] = useState<string[]>([]);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    const selectedService = brokerageServices.find(
      (item) => item.title === e.currentTarget.id
    );
    if (selectedService) {
      setDescription(selectedService.description);
      setActive(true);
    }
  };

  const handleBackClick = () => {
    setActive(false);
  };

  return (
    <div className="relative my-6">
      <div
        className={`flex flex-col gap-5 mb-3 ease-in-out ${active ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"} duration-700`}
      >
        {brokerageServices.map((item) => (
          <div
            className="p-7 bg-white dark:bg-slate-700 rounded flex items-center justify-between shadow-lg group hover:bg-dark-blue duration-700 cursor-pointer"
            onClick={handleClick}
            key={item.title}
            id={item.title}
          >
            <div className="flex gap-5 items-center">
              <item.icon className="size-12 text-sky-900 dark:text-sky-300 group-hover:text-sky-600 group-hover:dark:text-sky-500 duration-700" />
              <h3 className="text-slate-900 dark:text-slate-400 group-hover:text-sky-600 group-hover:dark:text-sky-500 duration-700 font-medium text-lg">
                {item.title}
              </h3>
            </div>
            <div className="bg-sky-900/20 p-3 rounded-full group-hover:bg-sky-300 duration-700">
              <IoIosArrowForward className="text-slate-900 group-hover:text-sky-600 group-hover:dark:text-sky-500 duration-700" />
            </div>
          </div>
        ))}
      </div>
      <div
        className={`absolute h-full w-full flex flex-col items-start justify-center p-14 gap-7  top-0 duration-700 ease-in-out ${active ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <button
          onClick={handleBackClick}
          className="flex gap-3 items-center cursor-pointer group"
        >
          <div className="p-3 bg-light-blue/15 rounded-full group-hover:bg-sky-900 duration-700">
            <IoIosArrowRoundBack className="text-slate-900 size-6 group-hover:text-sky-600 group-hover:dark:text-sky-500 duration-700" />
          </div>
          <p className="text-sky-800 text-sm uppercase font-medium tracking-widest">
            Back
          </p>
        </button>
        <div className="flex flex-col gap-3">
          {description.map((item, index) => (
            <p
              key={index}
              className="leading-loose text-gray-600 dark:text-gray-100"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrokerageServices;
