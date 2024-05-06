import { IoIosArrowBack, IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { MdOutlineVideoChat } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { FaPhotoVideo } from "react-icons/fa";

const ManagementServices = () => {
  const managementServices = [
    {
      title: "Promotional Videos",
      description: [
        "Create compelling video content that highlights the vibrancy and activity of your business or community. Aerial videos are particularly effective for promoting tourist attractions, luxury real estate, and special events in St Simons Island and Southport, offering viewers a dynamic and immersive experience.",
      ],
      icon: MdOutlineVideoChat,
    },
    {
      title: "Construction Progress",
      description: [
        "Keep stakeholders informed with regular video updates of construction sites. Aerial videography offers a comprehensive view of ongoing projects, facilitating better project management and documentation. This service is essential for construction companies and developers in St Simons Island and Southport.",
      ],
      icon: LuConstruction,
    },
    {
      title: "Documentaries",
      description: [
        "Incorporate striking aerial footage into your documentaries to enhance storytelling. Whether you're documenting historical landmarks, natural landscapes, or urban development in St Simons Island and Southport, aerial videography adds depth and context to your narrative.",
      ],
      icon: FaPhotoVideo,
    },
  ];

  const [description, setDescription] = useState<string[]>([]);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    const selectedService = managementServices.find(
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
    <div className="relative my-4">
      <div
        className={`flex flex-col gap-5 mb-3 ease-in-out ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"} duration-700`}
      >
        {managementServices.map((item) => (
          <div
            className="p-7 bg-gray-100 rounded flex flex-row-reverse items-center justify-between shadow-lg group hover:bg-slate-500 duration-700 cursor-pointer"
            onClick={handleClick}
            key={item.title}
            id={item.title}
          >
            <div className="flex gap-5 flex-row-reverse items-center">
              <item.icon className="size-12 text-medium-blue group-hover:text-sky-600 duration-700" />
              <h3 className="text-slate-500 group-hover:text-sky-600 duration-700 font-medium text-lg">
                {item.title}
              </h3>
            </div>
            <div className="bg-medium-blue/20 p-3 rounded-full group-hover:bg-mustard-yellow duration-700">
              <IoIosArrowBack className="text-slate-500 group-hover:text-sky-600 duration-700" />
            </div>
          </div>
        ))}
      </div>
      <div
        className={`absolute h-full w-full flex flex-col items-start justify-center p-14 gap-7  top-0 duration-700 ease-in-out ${active ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <button
          onClick={handleBackClick}
          className="flex gap-3 items-center cursor-pointer group self-end"
        >
          <div className="p-3 bg-light-blue/15 rounded-full group-hover:bg-medium-blue duration-700">
            <IoIosArrowRoundForward className="text-slate-500 size-6 group-hover:text-sky-600 duration-700" />
          </div>
          <p className="text-medium-blue text-sm uppercase font-medium tracking-widest">
            Back
          </p>
        </button>
        <div className="flex flex-col gap-3">
          {description.map((item, index) => (
            <p key={index} className="leading-loose text-gray-600">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementServices;
