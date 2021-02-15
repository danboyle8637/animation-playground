import { useRef, useEffect } from "react"
import { gsap, Power2 } from "gsap"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"

import { BaseSVGProps } from "../types/svgs"

gsap.registerPlugin(DrawSVGPlugin)

interface FormCheckProps extends BaseSVGProps {
  isTextInput: boolean
  shouldAnimate: boolean
}

const checkContainerVariants = {
  inactive: { x: "-100%", opacity: 0 },
  active: { x: 0, opacity: 1 },
}

export const FormCheckGsap: React.FC<FormCheckProps> = ({
  width,
  height,
  className,
  isTextInput,
  shouldAnimate,
}) => {
  const checkRef = useRef<SVGSVGElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    const svg = checkRef.current
    const path = pathRef.current
    const tl = gsap.timeline()

    if (svg && path) {
      tl.fromTo(
        path,
        { drawSVG: "100% 0%" },
        {
          duration: 1,
          drawSVG: "100% 100%",
          ease: Power2.easeIn,
          reversed: true,
        }
      )
    }
  }, [])

  return (
    <svg
      ref={checkRef}
      id="form-check"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 164.85 127.53"
    >
      <path
        ref={pathRef}
        id="check"
        fill="none"
        stroke={isTextInput ? "#24d279" : "#5AFDF2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="34"
        d="M147.85 17l-93.52 93.53L17 73.2"
      />
    </svg>
  )
}
