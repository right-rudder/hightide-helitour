import { useState } from "react";

interface PricingTabProps {
  pricePlane: number;
  priceHelicopter: number;
  planeLink: string;
  helicopterLink: string;
}

export default function PricingTable(props: PricingTabProps) {
  const [plane, setPlane] = useState<boolean>(false);
  const [isPlane, setIsPlane] = useState<boolean>(true);
  return (
    <div className="mt-8">
      {/* Pricing toggle */}
      <div className="flex justify-center w-4/5 lg:w-2/3 mx-auto mb-3">
        <div className="relative flex w-full p-1 bg-gray-100 dark:bg-slate-800 rounded-md">
          <span
            className="absolute inset-0 m-1 pointer-events-none"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 bg-mustard-yellow rounded-md shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${plane ? "translate-x-0" : "translate-x-full"}`}
            ></span>
          </span>
          <button
            className={`relative flex-1 text-lg italic h-12 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${plane ? "text-slate-900 font-semibold" : "text-slate-500 dark:text-slate-400"}`}
            onClick={() => setPlane(true)}
            aria-pressed={isPlane}
          >
            Airplane
          </button>
          <button
            className={`relative flex-1 text-lg italic h-12 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${plane ? "text-slate-500 dark:text-slate-400" : "text-slate-900 font-semibold"}`}
            onClick={() => setPlane(false)}
            aria-pressed={isPlane}
          >
            Helicopter
          </button>
        </div>
      </div>
      {/* Pricing tabs */}
      {plane ? (
        <div>
          <div className="px-4 py-5 w-2/3 lg:w-1/3 mx-auto bg-sky-200 dark:bg-sky-700 rounded-t-md">
            <span className="flex justify-center align-middle">
              <small className="dark:text-sky-200">$</small>
              <p className="text-4xl text-center text-gray-800 font-black dark:text-sky-100">
                {props.pricePlane}
              </p>
            </span>
            <small className="text-center font-semibold dark:text-sky-200">
              per person
            </small>
          </div>
          <div className="flex w-full justify-center sm:w-auto">
            <a
              target="_blank"
              href={props.planeLink}
              className="w-3/4 lg:w-1/2 px-16 py-6 sm:mb-0 font-black uppercase text-3xl italic shadow-lg duration-300 rounded-md bg-gradient-to-br from-sky-600 to-sky-300 dark:from-slate-800 dark:to-sky-600 text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div className="px-4 py-5 w-2/3 lg:w-1/3 mx-auto bg-sky-200 dark:bg-sky-700 rounded-t-md">
            <span className="flex justify-center align-middle">
              <small className="dark:text-sky-200">$</small>
              <p className="text-4xl text-center text-gray-800 font-black dark:text-sky-100">
                {props.priceHelicopter}
              </p>
            </span>
            <small className="text-center font-semibold dark:text-sky-200">
              per person
            </small>
          </div>
          <div className="flex w-full justify-center sm:w-auto">
            <a
              target="_blank"
              href={props.helicopterLink}
              className="w-3/4 lg:w-1/2 px-16 py-6 sm:mb-0 font-black uppercase text-3xl italic shadow-lg duration-300 rounded-md bg-gradient-to-br from-sky-600 to-sky-300 dark:from-slate-800 dark:to-sky-600 text-white"
            >
              Book Now
            </a>
          </div>
          <p className="mt-3 italic text-muted text-sm">
            Please note our helicopter tours require a minimum purchase of two
            passengers to operate.
          </p>
        </div>
      )}
    </div>
  );
}
