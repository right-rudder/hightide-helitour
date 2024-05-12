import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const locations = [
  {
    location: "Southport",
    image: getAsset("/images/southport.jpg"),
    href: getPermalink("/southport"),
    airportName: "Cape Fear Regional Jetport",
    airportCode: "KSUT",
    airportAddress: "4019 Long Beach Road SE, Southport, NC 28461",
    toursMapImage: getAsset("/images/southport-map.jpg"),
    tours: [
      {
        tourName: "Bald Head Island",
        href: getPermalink("/southport/bald-head-island"),
        image: getAsset("/images/southport/bald-head-island.jpg"),
        description:
          "Bald Head Island is a small island located at the mouth of the Cape Fear River in North Carolina. It is only accessible by ferry and is known for its beautiful beaches, historic lighthouse, and maritime forest.",
        type: "Airplane + Helicopter",
        planePrice: 123,
        heliPrice: 123,
      },
    ],
  },
];
