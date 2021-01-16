import { GradientSVGProps } from "../types/svgs"

export const HamburgerMenu3Bar: React.FC<GradientSVGProps> = ({
  width,
  height,
  className,
  gradientId,
}) => {
  return (
    <svg
      id="fww-menu-hamburger"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 94.13 70.45"
    >
      <defs>
        <linearGradient
          id={gradientId}
          y1="5.5"
          x2="91.13"
          y2="5.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#C1FFC1" />
          <stop offset=".25" stopColor="#87ff87" />
          <stop offset=".76" stopColor="#6fec70" />
          <stop offset="1" stopColor="#33DA34" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          y1="62.95"
          x2="63.02"
          y2="62.95"
          xlinkHref={gradientId}
        />
        <linearGradient
          id="linear-gradient-3"
          y1="34.22"
          x2="78.86"
          y2="34.22"
          xlinkHref={gradientId}
        />
      </defs>
      <path
        id="top-menu-bar"
        data-name="top-menu-bar"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="11"
        stroke={`url(#${gradientId})`}
        d="M5.5 5.5h80.13"
      />
      <path
        id="bottom-menu-bar"
        data-name="bottom-menu-bar"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="11"
        stroke={`url(#${gradientId})`}
        d="M5.5 62.95H57.52"
      />
      <path
        id="middle-menu-bar"
        data-name="middle-menu-bar"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="11"
        stroke={`url(#${gradientId})`}
        d="M5.5 34.22h67.86"
      />
    </svg>
  )
}
