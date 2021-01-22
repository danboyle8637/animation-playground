import styled from "styled-components"
import { motion } from "framer-motion"

export const BasicHover = () => {
  return (
    <>
      <BasicCard
        whileHover={{ y: -8, scale: 1.04 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </>
  )
}

const BasicCard = styled(motion.div)`
  background: var(--color-gradient-framer);
  border-radius: 20px;
  width: 100%;
  height: 300px;
  cursor: pointer;
`
