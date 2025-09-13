"use client"
import SchemeProps from "../../lib/types";

export default function SchemeCard({
  _id,
  schemeName,
  schemeShortTitle,
  state,
  level,
  tags,
  category,
  detailedDescription_md,
  references,
  openDate,
  closeDate,
  nodalMinistryName,
}: SchemeProps) {
  const truncatedDescription = detailedDescription_md
    ? detailedDescription_md.substring(0, 150) +
      (detailedDescription_md.length > 150 ? "..." : "")
    : "";

  const mainCategory = category && category.length > 0 ? category[0] : "";

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };


  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
      <div className="h-2 bg-green-600"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
            {mainCategory}
          </span>
          <span className="text-xs text-gray-500">{level || "Unknown"}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-green-700 line-clamp-2">
          {schemeName}
        </h3>

        {schemeShortTitle && (
          <p className="text-sm text-gray-500 mb-3">
            <span className="font-medium">Short title:</span> {schemeShortTitle}
          </p>
        )}

        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {truncatedDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags &&
            tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          {tags && tags.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
              +{tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          {state && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              {state}
            </span>
          )}

          {nodalMinistryName && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              {nodalMinistryName}
            </span>
          )}

          {(openDate || closeDate) && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              {openDate ? formatDate(openDate) : ""}
              {openDate && closeDate ? " - " : ""}
              {closeDate ? formatDate(closeDate) : ""}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <a
            href={`/schemes/scheme/${_id}`}
            className="text-green-600 font-medium hover:text-green-700 text-sm flex items-center gap-1"
          >
            View Details
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
}
