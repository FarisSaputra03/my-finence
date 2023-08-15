import React from "react";

export default function Content() {
  const listContent = [
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#1F7CFF" />
          <path
            d="M38 25H22C20.8954 25 20 25.8954 20 27V37C20 38.1046 20.8954 39 22 39H38C39.1046 39 40 38.1046 40 37V27C40 25.8954 39.1046 25 38 25Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M34 39V23C34 22.4696 33.7893 21.9609 33.4142 21.5858C33.0391 21.2107 32.5304 21 32 21H28C27.4696 21 26.9609 21.2107 26.5858 21.5858C26.2107 21.9609 26 22.4696 26 23V39"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Share Insights",
      description: "Working together with your team to make decisions",
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#F75C4E" />
          <path
            d="M40 20L29 31"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M40 20L33 40L29 31L20 27L40 20Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Track Leads",
      description: "See where your money goes and comes in business",
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#191046" />
          <g clip-path="url(#clip0_1_88)">
            <path
              d="M19 19L41 41"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30 38H30.01"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.53 34.11C27.5452 33.3887 28.7597 33.0013 30.005 33.0013C31.2503 33.0013 32.4648 33.3887 33.48 34.11"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.72 29.06C35.5391 29.4597 36.305 29.9603 37 30.55"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 30.55C24.4821 29.3108 26.2659 28.4862 28.17 28.16"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.42 27C20.8072 25.7738 22.3977 24.7992 24.12 24.12"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.71 23.05C30.8524 22.8774 33.0076 23.1382 35.047 23.8168C37.0864 24.4955 38.9682 25.5781 40.58 27"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_88">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(18 18)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: " Offline Mode",
      description: "Use the feature while off from internet? sure can",
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#FF1FB3" />
          <path
            d="M37 21H23C21.8954 21 21 21.8954 21 23V37C21 38.1046 21.8954 39 23 39H37C38.1046 39 39 38.1046 39 37V23C39 21.8954 38.1046 21 37 21Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M35 25H32V30H35V25Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 25H25V34H28V25Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Kanban Mode",
      description: "Organize the report that easy to be understand",
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#5C4EF7" />
          <path
            d="M38 30V40H22V30"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M40 25H20V30H40V25Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 40V25"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 25H34.5C35.163 25 35.7989 24.7366 36.2678 24.2678C36.7366 23.7989 37 23.163 37 22.5C37 21.837 36.7366 21.2011 36.2678 20.7322C35.7989 20.2634 35.163 20 34.5 20C31 20 30 25 30 25Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 25H25.5C24.837 25 24.2011 24.7366 23.7322 24.2678C23.2634 23.7989 23 23.163 23 22.5C23 21.837 23.2634 21.2011 23.7322 20.7322C24.2011 20.2634 24.837 20 25.5 20C29 20 30 25 30 25Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: " Reward System",
      description: "Motivate your team working harder and receive a gift",
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#F7954E" />
          <path
            d="M30 40C35.5228 40 40 35.5228 40 30C40 24.4772 35.5228 20 30 20C24.4772 20 20 24.4772 20 30C20 35.5228 24.4772 40 30 40Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 30H40"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30 20C32.5013 22.7384 33.9228 26.292 34 30C33.9228 33.708 32.5013 37.2616 30 40C27.4987 37.2616 26.0772 33.708 26 30C26.0772 26.292 27.4987 22.7384 30 20V20Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: " 189 Country",
      description: " Working together worldwide people from anywhere",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-red-500 tracking-widest font-bold title-font mb-1">
            WORK BETTER
          </h2>
          <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">
            For Your Business
          </h1>
          <p className="lg:w-2/3 mx-auto  leading-relaxed text-base">
            We did research what your company needs and
          </p>
          <p className="lg:w-2/3 mx-auto  leading-relaxed text-base">
            here we are providing all of them just for you
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 gap-5">
            {listContent.map((data: any, index) => (
              <div
                key={index + 1}
                className="border border-gray-200 p-4 rounded-lg">
                <div className=" flex gap-5">
                  <div>{data.svg}</div>
                  <div>
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                      {data.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
