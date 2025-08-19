import React, { useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import locationIcon from "../assets/mdi_location.svg";

// Import images (keep your existing imports here)
import img1 from "../assets/The Rusty Spur Salon.jpg";
import img2 from "../assets/The Gilded Rose.jpg";
import img3 from "../assets/The Velvet Lounge.jpg";
import img4 from "../assets/The Golden Oasis.jpg";
import img5 from "../assets/Dusty Trails.jpg";
import img6 from "../assets/Cactus Bloom.jpg";
import img7 from "../assets/Silver Creek Tavern.jpg";
import img8 from "../assets/Whiskey Hollow.jpg";
import img9 from "../assets/Wild West Hideout.jpg";
import img10 from "../assets/Pine Ridge.jpg";
import img11 from "../assets/Grit & Grain.jpg";
import img12 from "../assets/Saddleback Pub.jpg";
import img13 from "../assets/Frontier Stop.jpg";
import img14 from "../assets/Coyote Corner.jpg";
import img15 from "../assets/Lone Star Lounge.jpg";
import img16 from "../assets/Rusty Wagon.jpg";
import img17 from "../assets/Mavericks Nook.jpg";
import img18 from "../assets/Trailblazers Retreat.jpg";
import img19 from "../assets/Boulder Creek.jpg";
import img20 from "../assets/Ranch House.jpg";

// ===================== DATA =====================
const data = [
  { title: "Hair Treatments & Salons", subtitle: "The Rusty Spur Salon", location: "Sector 21, Gurugram, India", img: img1 },
  { title: "Hair Treatments & Salons", subtitle: "The Gilded Rose", location: "Sector 21, Gurugram, India", img: img2 },
  { title: "Hair Treatments & Salons", subtitle: "The Velvet Lounge", location: "Sector 21, Gurugram, India", img: img3 },
  { title: "Hair Treatments & Salons", subtitle: "The Golden Oasis", location: "Sector 21, Gurugram, India", img: img4 },
  { title: "Hair Treatments & Salons", subtitle: "Dusty Trails", location: "Sector 21, Gurugram, India", img: img5 },
  { title: "Hair Treatments & Salons", subtitle: "Cactus Bloom", location: "Sector 21, Gurugram, India", img: img6 },
  { title: "Hair Treatments & Salons", subtitle: "Silver Creek Tavern", location: "Sector 21, Gurugram, India", img: img7 },
  { title: "Hair Treatments & Salons", subtitle: "Whiskey Hollow", location: "Sector 21, Gurugram, India", img: img8 },
  { title: "Hair Treatments & Salons", subtitle: "Wild West Hideout", location: "Sector 21, Gurugram, India", img: img9 },
  { title: "Hair Treatments & Salons", subtitle: "Pine Ridge", location: "Sector 21, Gurugram, India", img: img10 },
  { title: "Hair Treatments & Salons", subtitle: "Grit & Grain", location: "Sector 21, Gurugram, India", img: img11 },
  { title: "Hair Treatments & Salons", subtitle: "Saddleback Pub", location: "Sector 21, Gurugram, India", img: img12 },
  { title: "Hair Treatments & Salons", subtitle: "Frontier Stop", location: "Sector 21, Gurugram, India", img: img13 },
  { title: "Hair Treatments & Salons", subtitle: "Coyote Corner", location: "Sector 21, Gurugram, India", img: img14 },
  { title: "Hair Treatments & Salons", subtitle: "Lone Star Lounge", location: "Sector 21, Gurugram, India", img: img15 },
  { title: "Hair Treatments & Salons", subtitle: "Rusty Wagon", location: "Sector 21, Gurugram, India", img: img16 },
  { title: "Hair Treatments & Salons", subtitle: "Maverick's Nook", location: "Sector 21, Gurugram, India", img: img17 },
  { title: "Hair Treatments & Salons", subtitle: "Trailblazer's Retreat", location: "Sector 21, Gurugram, India", img: img18 },
  { title: "Hair Treatments & Salons", subtitle: "Boulder Creek", location: "Sector 21, Gurugram, India", img: img19 },
  { title: "Hair Treatments & Salons", subtitle: "Ranch House", location: "Sector 21, Gurugram, India", img: img20 },
];

// Utility to normalize query values (strip optional surrounding quotes)
const sanitize = (v) => {
  if (!v) return "";
  const trimmed = v.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;a
};

// ===================== LIST PAGE (your original UI preserved) =====================
function ServiceCardGrid() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Read query params: category and query
  const categoryParam = sanitize(searchParams.get("c"));
  const queryParam = sanitize(searchParams.get("q"));

  // Build filtered list but preserve original indexes for routing
  const filtered = useMemo(() => {
    // Start as [{ item, index }]
    let list = data.map((item, index) => ({ item, index }));

    if (categoryParam) {
      const c = categoryParam.toLowerCase();
      list = list.filter(({ item }) => item.title.toLowerCase().includes(c));
    }
    if (queryParam) {
      const q = queryParam.toLowerCase();
      list = list.filter(({ item }) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
      );
    }
    return list;
  }, [categoryParam, queryParam]);

  const handleCardClick = (originalIndex) => {
    navigate(`/services/${originalIndex}`); // navigate to service detail page with id as original index
  };

  return (
    <section className="w-full bg-white pt-6 pb-12 sm:pt-[45.75px] sm:pb-[50px]">
      {/* Breadcrumb - Consistent across all screen sizes */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-[90px] mb-4">
        <p className="font-medium text-[12px] sm:text-[14px] lg:text-[18px]">
          <span className="text-[#666] font-montserrat">Skin, Hair & Beauty </span>
          <span className="text-[#000] font-montserrat">/ Hair Treatments & Salons</span>
        </p>

        {(categoryParam || queryParam) && (
          <p className="mt-2 text-sm text-gray-600 font-montserrat">
            Showing results {categoryParam && <>for category: <span className="font-semibold">“{categoryParam}”</span> </>}
            {queryParam && <>matching: <span className="font-semibold">“{queryParam}”</span></>}
            {!filtered.length && <span className="block text-red-600 mt-1">No services found.</span>}
          </p>
        )}
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 sm:px-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-[17.97px] justify-items-center">
            {filtered.map(({ item, index: originalIndex }) => (
              <div
                key={originalIndex}
                onClick={() => handleCardClick(originalIndex)}
                className="flex flex-col bg-white shadow-[0_3.422px_15.999px_rgba(0,0,0,0.10)] transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] w-full max-w-[305px]"
                style={{ borderRadius: "17.111px", cursor: "pointer" }}
              >
                <div className="h-[273.778px] w-full rounded-t-[27.111px] rounded-b-[3.422px] bg-white p-4">
                  <div
                    className="h-full w-full bg-cover bg-center border border-gray-200"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      borderTopLeftRadius: "17.111px",
                      borderTopRightRadius: "17.111px",
                      borderBottomLeftRadius: "3.442px",
                      borderBottomRightRadius: "3.442px",
                    }}
                  ></div>
                </div>
                <div className="px-5 py-0 flex flex-col flex-grow">
                  <p className="text-[#414141] font-montserrat text-[14px] font-medium leading-normal truncate mt-[3px]">
                    {item.title}
                  </p>
                  <p className="text-[#210303] font-montserrat text-[20px] font-bold leading-normal truncate mt-[7px]">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center gap-[8.556px] mt-1 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M8.36621 9.15137C7.8903 9.15137 7.42508 9.01024 7.02937 8.74584C6.63367 8.48144 6.32525 8.10563 6.14313 7.66595C5.961 7.22627 5.91335 6.74245 6.0062 6.27568C6.09904 5.80892 6.32822 5.38016 6.66474 5.04364C7.00126 4.70712 7.43001 4.47795 7.89678 4.3851C8.36354 4.29226 8.84736 4.33991 9.28704 4.52203C9.72673 4.70416 10.1025 5.01257 10.3669 5.40828C10.6313 5.80398 10.7725 6.26921 10.7725 6.74512C10.7717 7.38306 10.5179 7.99466 10.0668 8.44575C9.61575 8.89684 9.00415 9.1506 8.36621 9.15137ZM8.36621 5.30137C8.08067 5.30137 7.80153 5.38604 7.56411 5.54468C7.32668 5.70333 7.14163 5.92881 7.03236 6.19262C6.92309 6.45643 6.8945 6.74672 6.9502 7.02678C7.00591 7.30684 7.14341 7.56409 7.34533 7.766C7.54724 7.96792 7.80449 8.10542 8.08455 8.16113C8.36461 8.21683 8.6549 8.18824 8.91871 8.07897C9.18252 7.96969 9.408 7.78465 9.56665 7.54722C9.72529 7.3098 9.80996 7.03066 9.80996 6.74512C9.80958 6.36233 9.65735 5.99533 9.38667 5.72465C9.116 5.45398 8.749 5.30175 8.36621 5.30137Z" fill="#5D5D5D" />
                      <path d="M8.36699 14.9264L4.30717 10.1385C4.25076 10.0666 4.19493 9.99422 4.1397 9.92142C3.44655 9.00771 3.07196 7.89203 3.07325 6.74517C3.07325 5.34118 3.63098 3.99469 4.62375 3.00192C5.61652 2.00915 6.96301 1.45142 8.36699 1.45142C9.77098 1.45142 11.1175 2.00915 12.1102 3.00192C13.103 3.99469 13.6607 5.34118 13.6607 6.74517C13.6619 7.89148 13.2874 9.0066 12.5948 9.91997L12.5943 9.92142C12.5943 9.92142 12.4499 10.111 12.4283 10.1365L8.36699 14.9264ZM4.90825 9.34151C4.90825 9.34151 5.02038 9.48973 5.04589 9.5215L8.36699 13.4384L11.6924 9.5162C11.7136 9.48973 11.8262 9.34055 11.8267 9.34007C12.3932 8.59372 12.6994 7.68218 12.6982 6.74517C12.6982 5.59645 12.2419 4.49478 11.4297 3.68251C10.6174 2.87024 9.51571 2.41392 8.36699 2.41392C7.21828 2.41392 6.11661 2.87024 5.30434 3.68251C4.49207 4.49478 4.03575 5.59645 4.03575 6.74517C4.03456 7.68278 4.34107 8.59489 4.90825 9.34151Z" fill="#5D5D5D" />
                    </svg>
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap text-[#4A4A4A] font-montserrat text-[13.689px] font-normal leading-normal">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[35.5px] flex justify-center">
            <button className="inline-flex h-[60px] px-[44px] py-[20px] justify-center items-center gap-[10px] rounded-[10px] bg-[#121212] text-white font-montserrat text-[20px] font-medium leading-[110%] hover:bg-[#333] transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* Tablet Version (for screens between mobile and desktop) */}
      <div className="hidden sm:block lg:hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {filtered.map(({ item, index: originalIndex }) => (
              <div
                key={originalIndex}
                onClick={() => handleCardClick(originalIndex)}
                className="flex flex-col rounded-lg bg-white shadow-[0_3px_15px_rgba(0,0,0,0.10)] transform transition duration-300 hover:scale-[1.02] hover:shadow-[0_5px_18px_rgba(0,0,0,0.15)] w-full max-w-[305px]"
                style={{ cursor: "pointer" }}
              >
                <div className="relative pt-[75%] bg-white p-3">
                  <div
                    className="absolute top-0 left-0 right-0 bottom-0 m-3 bg-cover bg-center border border-gray-200 rounded-[10px]"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      borderTopLeftRadius: "17.111px",
                      borderTopRightRadius: "17.111px",
                      borderBottomLeftRadius: "3.442px",
                      borderBottomRightRadius: "3.442px",
                    }}
                  ></div>
                </div>
                <div className="px-3 py-2 flex flex-col flex-grow">
                  <p className="text-[#414141] font-montserrat text-sm font-medium leading-tight truncate">
                    {item.title}
                  </p>
                  <p className="text-[#210303] font-montserrat text-lg font-bold leading-tight truncate mt-1">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M8.36621 9.15137C7.8903 9.15137 7.42508 9.01024 7.02937 8.74584C6.63367 8.48144 6.32525 8.10563 6.14313 7.66595C5.961 7.22627 5.91335 6.74245 6.0062 6.27568C6.09904 5.80892 6.32822 5.38016 6.66474 5.04364C7.00126 4.70712 7.43001 4.47795 7.89678 4.3851C8.36354 4.29226 8.84736 4.33991 9.28704 4.52203C9.72673 4.70416 10.1025 5.01257 10.3669 5.40828C10.6313 5.80398 10.7725 6.26921 10.7725 6.74512C10.7717 7.38306 10.5179 7.99466 10.0668 8.44575C9.61575 8.89684 9.00415 9.1506 8.36621 9.15137ZM8.36621 5.30137C8.08067 5.30137 7.80153 5.38604 7.56411 5.54468C7.32668 5.70333 7.14163 5.92881 7.03236 6.19262C6.92309 6.45643 6.8945 6.74672 6.9502 7.02678C7.00591 7.30684 7.14341 7.56409 7.34533 7.766C7.54724 7.96792 7.80449 8.10542 8.08455 8.16113C8.36461 8.21683 8.6549 8.18824 8.91871 8.07897C9.18252 7.96969 9.408 7.78465 9.56665 7.54722C9.72529 7.3098 9.80996 7.03066 9.80996 6.74512C9.80958 6.36233 9.65735 5.99533 9.38667 5.72465C9.116 5.45398 8.749 5.30175 8.36621 5.30137Z" fill="#5D5D5D" />
                      <path d="M8.36699 14.9264L4.30717 10.1385C4.25076 10.0666 4.19493 9.99422 4.1397 9.92142C3.44655 9.00771 3.07196 7.89203 3.07325 6.74517C3.07325 5.34118 3.63098 3.99469 4.62375 3.00192C5.61652 2.00915 6.96301 1.45142 8.36699 1.45142C9.77098 1.45142 11.1175 2.00915 12.1102 3.00192C13.103 3.99469 13.6607 5.34118 13.6607 6.74517C13.6619 7.89148 13.2874 9.0066 12.5948 9.91997L12.5943 9.92142C12.5943 9.92142 12.4499 10.111 12.4283 10.1365L8.36699 14.9264ZM4.90825 9.34151C4.90825 9.34151 5.02038 9.48973 5.04589 9.5215L8.36699 13.4384L11.6924 9.5162C11.7136 9.48973 11.8262 9.34055 11.8267 9.34007C12.3932 8.59372 12.6994 7.68218 12.6982 6.74517C12.6982 5.59645 12.2419 4.49478 11.4297 3.68251C10.6174 2.87024 9.51571 2.41392 8.36699 2.41392C7.21828 2.41392 6.11661 2.87024 5.30434 3.68251C4.49207 4.49478 4.03575 5.59645 4.03575 6.74517C4.03456 7.68278 4.34107 8.59489 4.90825 9.34151Z" fill="#5D5D5D" />
                    </svg>
                    <span className="text-[#4A4A4A] font-montserrat text-xs font-normal leading-tight truncate">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 rounded-lg bg-[#121212] text-white font-montserrat text-base font-medium hover:bg-[#333] transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden px-4">
        <div className="grid grid-cols-2 gap-3 justify-items-center">
          {filtered.map(({ item, index: originalIndex }) => (
            <div
              key={originalIndex}
              onClick={() => handleCardClick(originalIndex)}
              className="flex flex-col rounded-lg border border-white bg-white shadow-sm overflow-hidden w-full"
              style={{ boxShadow: "0 1.882px 8.799px rgba(0, 0, 0, 0.10)", cursor: "pointer" }}
            >
              <div className="relative bg-white p-2">
                <div className="relative" style={{ paddingBottom: "100%" }}>
                  <img
                    src={item.img}
                    alt={item.subtitle}
                    className="absolute top-0 left-0 w-full h-full object-cover border border-gray-200"
                    style={{
                      objectPosition: "center",
                      display: "block",
                      borderTopLeftRadius: "9.411px",
                      borderTopRightRadius: "9.411px",
                      borderBottomLeftRadius: "1.882px",
                      borderBottomRightRadius: "1.882px",
                    }}
                  />
                </div>
              </div>

              <div className="p-2 space-y-1">
                <p className="text-[#414141] font-montserrat text-[11px] sm:text-xs font-medium leading-tight truncate">
                  {item.title}
                </p>
                <p className="text-[#210303] font-montserrat text-sm sm:text-[15px] font-bold leading-tight truncate">
                  {item.subtitle}
                </p>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M8.36621 9.15137C7.8903 9.15137 7.42508 9.01024 7.02937 8.74584C6.63367 8.48144 6.32525 8.10563 6.14313 7.66595C5.961 7.22627 5.91335 6.74245 6.0062 6.27568C6.09904 5.80892 6.32822 5.38016 6.66474 5.04364C7.00126 4.70712 7.43001 4.47795 7.89678 4.3851C8.36354 4.29226 8.84736 4.33991 9.28704 4.52203C9.72673 4.70416 10.1025 5.01257 10.3669 5.40828C10.6313 5.80398 10.7725 6.26921 10.7725 6.74512C10.7717 7.38306 10.5179 7.99466 10.0668 8.44575C9.61575 8.89684 9.00415 9.1506 8.36621 9.15137ZM8.36621 5.30137C8.08067 5.30137 7.80153 5.38604 7.56411 5.54468C7.32668 5.70333 7.14163 5.92881 7.03236 6.19262C6.92309 6.45643 6.8945 6.74672 6.9502 7.02678C7.00591 7.30684 7.14341 7.56409 7.34533 7.766C7.54724 7.96792 7.80449 8.10542 8.08455 8.16113C8.36461 8.21683 8.6549 8.18824 8.91871 8.07897C9.18252 7.96969 9.408 7.78465 9.56665 7.54722C9.72529 7.3098 9.80996 7.03066 9.80996 6.74512C9.80958 6.36233 9.65735 5.99533 9.38667 5.72465C9.116 5.45398 8.749 5.30175 8.36621 5.30137Z" fill="#5D5D5D" />
                    <path d="M8.36699 14.9264L4.30717 10.1385C4.25076 10.0666 4.19493 9.99422 4.1397 9.92142C3.44655 9.00771 3.07196 7.89203 3.07325 6.74517C3.07325 5.34118 3.63098 3.99469 4.62375 3.00192C5.61652 2.00915 6.96301 1.45142 8.36699 1.45142C9.77098 1.45142 11.1175 2.00915 12.1102 3.00192C13.103 3.99469 13.6607 5.34118 13.6607 6.74517C13.6619 7.89148 13.2874 9.0066 12.5948 9.91997L12.5943 9.92142C12.5943 9.92142 12.4499 10.111 12.4283 10.1365L8.36699 14.9264ZM4.90825 9.34151C4.90825 9.34151 5.02038 9.48973 5.04589 9.5215L8.36699 13.4384L11.6924 9.5162C11.7136 9.48973 11.8262 9.34055 11.8267 9.34007C12.3932 8.59372 12.6994 7.68218 12.6982 6.74517C12.6982 5.59645 12.2419 4.49478 11.4297 3.68251C10.6174 2.87024 9.51571 2.41392 8.36699 2.41392C7.21828 2.41392 6.11661 2.87024 5.30434 3.68251C4.49207 4.49478 4.03575 5.59645 4.03575 6.74517C4.03456 7.68278 4.34107 8.59489 4.90825 9.34151Z" fill="#5D5D5D" />
                  </svg>
                  <span className="text-[#4A4A4A] font-montserrat text-[11px] sm:text-xs leading-snug truncate">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 rounded-lg bg-[#121212] text-white font-montserrat text-sm font-medium hover:bg-[#333] transition-colors">
            Load More..
          </button>
        </div>
      </div>
    </section>
  );
}

// ===================== DETAIL PAGE =====================
function ServiceDetail() {
  const { id } = useParams();
  const numericId = Number(id);
  const service = Number.isInteger(numericId) ? data[numericId] : null;

  if (!service) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service not found</h1>
          <p className="text-gray-600 mt-2">The service you’re looking for doesn’t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[90px] py-6">
        <p className="font-medium text-[12px] sm:text-[14px] lg:text-[18px]">
          <span className="text-[#666] font-montserrat">Skin, Hair & Beauty </span>
          <span className="text-[#000] font-montserrat">/ {service.title}</span>
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <img
              src={service.img}
              alt={service.subtitle}
              className="w-full h-[320px] sm:h-[420px] object-cover rounded-[16px] shadow"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-montserrat font-bold text-[#210303]">
              {service.subtitle}
            </h1>
            <p className="mt-2 text-[#414141] font-montserrat text-base">
              {service.title}
            </p>
            <div className="mt-3 flex items-center gap-2 text-[#4A4A4A]">
              <img src={locationIcon} alt="" className="w-4 h-4" />
              <span className="font-montserrat">{service.location}</span>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600 font-montserrat leading-relaxed">
                {/* Placeholder description content */}
                Experience premium care at <span className="font-semibold">{service.subtitle}</span>.
                We offer expert stylists, hygienic facilities, and personalized treatments tailored to your needs.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="/service"
                className="inline-flex items-center px-5 py-3 rounded-[10px] bg-[#121212] text-white font-montserrat text-sm sm:text-base font-medium hover:bg-[#333] transition-colors"
              >
                ← Back to Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===================== APP ROUTES (mount these where appropriate) =====================
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* List page with query param filtering and searching */}
        <Route path="/service" element={<ServiceCardGrid />} />
        {/* Detail page by original index */}
        <Route path="/service/:id" element={<ServiceDetail />} />
        {/* Fallback to list */}
        <Route path="*" element={<ServiceCardGrid />} />
      </Routes>
    </Router>
  );
}  