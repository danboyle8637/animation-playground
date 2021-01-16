import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

interface BasicMenuDrawerProps {
  isOpen: boolean
}

const drawerVariants = {
  closed: { x: "-100%", opacity: 0 },
  open: { x: 0, opacity: 1 },
}

export const BasicMenuDrawer: React.FC<BasicMenuDrawerProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <FramerDrawer
          variants={drawerVariants}
          initial="closed"
          animate="open"
          exit="closed"
        />
      ) : null}
    </AnimatePresence>
  )
}

const FramerDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    var(--color-framer-blue-1),
    var(--color-framer-blue-2),
    var(--color-framer-blue-4)
  );
  border-radius: 0 20px 20px 0;
  width: 280px;
  box-shadow: 0 0 24px -3px rgba(90, 253, 242, 0.6);
  z-index: 999;
`
