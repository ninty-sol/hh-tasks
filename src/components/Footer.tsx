import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 sticky bottom-0">
      <div className="flex items-center justify-center space-x-4">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" fill-opacity="0">
              <circle cx="9" cy="12" r="1.5">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.2s"
                  dur="0.4s"
                  values="0;1"
                />
              </circle>
              <circle cx="15" cy="12" r="1.5">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.4s"
                  dur="0.4s"
                  values="0;1"
                />
              </circle>
            </g>
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="30"
                stroke-dashoffset="30"
                d="M15.5 17.5L16.5 19.5C16.5 19.5 20.671 18.172 22 16C22 15 22.53 7.853 19 5.5C17.5 4.5 15 4 15 4L14 6H12M8.52799 17.5L7.52799 19.5C7.52799 19.5 3.35699 18.172 2.02799 16C2.02799 15 1.49799 7.853 5.02799 5.5C6.52799 4.5 9.02799 4 9.02799 4L10.028 6H12.028"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="30;60"
                />
              </path>
              <path
                stroke-dasharray="16"
                stroke-dashoffset="16"
                d="M5.5 16C10.5 18.5 13.5 18.5 18.5 16"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
            </g>
          </svg>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-dasharray="62"
              stroke-dashoffset="62"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.8906 7.34375C19.7969 7.67188 19.4001 8.50548 18.7219 9.29669C18.2698 17.9717 9.84907 20.7974 4.08456 17.8869C3.29335 16.8414 6.93856 17.2653 8.26666 15.259C3.23684 12.6876 3.63244 5.82103 4.64971 6.1036C7.02333 9.29669 10.8381 9.57926 11.4597 9.29669C11.4597 8.562 11.1489 6.97958 12.8726 5.65148C13.8616 4.94505 15.9297 4.3125 17.8047 6.34375C18.125 6.55469 18.5859 6.64844 19.2734 6.49219C19.6797 6.28125 20.2262 6.427 19.9453 7.15625"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="62;0"
              />
            </path>
          </svg>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="16"
                stroke-dashoffset="16"
                d="M21 5L18.5 20M21 5L9 13.5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
              <path
                stroke-dasharray="22"
                stroke-dashoffset="22"
                d="M21 5L2 12.5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="22;0"
                />
              </path>
              <path
                stroke-dasharray="12"
                stroke-dashoffset="12"
                d="M18.5 20L9 13.5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.3s"
                  values="12;0"
                />
              </path>
              <path
                stroke-dasharray="8"
                stroke-dashoffset="8"
                d="M2 12.5L9 13.5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.3s"
                  values="8;0"
                />
              </path>
              <path
                stroke-dasharray="6"
                stroke-dashoffset="6"
                d="M12 16L9 19M9 13.5L9 19"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.3s"
                  values="6;0"
                />
              </path>
            </g>
          </svg>
        </a>
      </div>
      <p className="text-gray-500 text-sm mt-2">
        &copy; {new Date().getFullYear()} Ninty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;