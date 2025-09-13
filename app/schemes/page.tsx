import SchemeCard from "../components/schemeCard";
import TagsDropdown from "../components/tagsDropdown";

export default async function SchemePage() {
  const level = ["Central", "State", "Both"];
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman & Nicobar Islands",
    "Chandigarh",
    "Dadra & Nagar Haveli and Daman & Diu",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  return (
    <div className="min-h-screen bg-[#0f2027]/5 ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2c5364] via-[#203a43] to-[#0f2027] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Government Schemes for Every Citizen
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Find and access government schemes tailored to your needs. We help
            you discover benefits you're eligible for.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#203a43] mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Search & Filter",
              desc: "Find relevant schemes based on your category, state, or specific needs.",
            },
            {
              step: 2,
              title: "Check Eligibility",
              desc: "Review the eligibility criteria to see if you qualify for the scheme.",
            },
            {
              step: 3,
              title: "Apply Online",
              desc: "Follow our step-by-step guides to apply directly through official channels.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-[#2c5364]/10 text-[#2c5364] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#203a43]">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#203a43]">Filter Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#2c5364] focus:ring focus:ring-[#2c5364]/20 h-9">
                <option value="">All Levels</option>
                {level.map((lvl) => (
                  <option key={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#2c5364] focus:ring focus:ring-[#2c5364]/20 h-9">
                <option value="">All States</option>
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <TagsDropdown />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-gradient-to-r from-[#2c5364] to-[#203a43] text-white px-5 py-2 rounded-md hover:from-[#2c5364] hover:to-[#0f2027] transition-all duration-300 shadow-md">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}