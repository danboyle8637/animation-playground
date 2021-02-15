import { motion } from "framer-motion"

import { BaseSVGProps } from "../types/svgs"

interface FormCheckProps extends BaseSVGProps {
  isTextInput: boolean
  shouldAnimate: boolean
}

const checkContainerVariants = {
  inactive: { x: "-100%", opacity: 0 },
  active: { x: 0, opacity: 1 },
}

const checkVarients = {
  inactive: { pathLength: 0, pathOffset: 1 },
  active: { pathLength: 1, pathOffset: 0 },
}

export const FormCheckFramer: React.FC<FormCheckProps> = ({
  width,
  height,
  className,
  isTextInput,
  shouldAnimate,
}) => {
  return (
    <motion.svg
      style={isTextInput ? {} : { translateX: "-50%", translateY: "-50%" }}
      key="validIcon"
      variants={checkContainerVariants}
      initial="inactive"
      animate={shouldAnimate ? "active" : "inactive"}
      exit="inactive"
      id="form-check"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 164.85 127.53"
    >
      <motion.path
        variants={checkVarients}
        initial="inactive"
        animate={shouldAnimate ? "active" : "inactive"}
        transition={{ duration: 0.6 }}
        id="check"
        fill="none"
        stroke={isTextInput ? "#24d279" : "#5AFDF2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="34"
        d="M147.85 17l-93.52 93.53L17 73.2"
      />
    </motion.svg>
  )
}
