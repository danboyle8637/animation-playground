import { BaseSVGProps } from "../types/svgs"

export const HamburgerMenu4Bar: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
    >
      <path
        id="main-hamburger-icon-container"
        fill="none"
        d="M0 0h200v200H0z"
      />
      <g id="main-hamburger-icon-container1" fill="none">
        <g id="bottom-bar">
          <path
            id="bottom-shadow-bar"
            d="M82.584 171.714h99.493"
            stroke="#000"
            strokeOpacity=".6"
            strokeWidth="33.33"
          />
          <path
            id="bottom-bar1"
            d="M82.584 171.714h99.493"
            stroke="#1f81ff"
            strokeWidth="25"
          />
        </g>
        <g id="middle-bottom-bar">
          <path
            id="middle-bottom-shadow-bar"
            d="M52.694 124.036H174.38"
            stroke="#000"
            strokeOpacity=".6"
            strokeWidth="33.33"
          />
          <path
            id="middle-bottom-bar1"
            d="M52.694 124.036H174.38"
            stroke="#13c3ff"
            strokeWidth="25"
          />
        </g>
        <g id="middle-top-bar">
          <path
            id="middle-top-shadow-bar"
            d="M17.923 76.358h141.679"
            stroke="#000"
            strokeOpacity=".6"
            strokeWidth="33.33"
          />
          <path
            id="middle-top-bar1"
            d="M17.923 76.358h141.679"
            stroke="#1fecff"
            strokeWidth="25"
          />
        </g>
        <g id="top-bar">
          <path
            id="top-shadow-bar"
            d="M17.923 28.68h164.154"
            stroke="#000"
            strokeOpacity=".6"
            strokeWidth="33.33"
          />
          <path
            id="top-bar1"
            d="M17.923 28.68h164.154"
            stroke="#5afdf2"
            strokeWidth="25"
          />
        </g>
      </g>
    </svg>
  )
}
