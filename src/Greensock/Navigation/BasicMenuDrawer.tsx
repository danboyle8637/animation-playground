import styled from "styled-components"

import { BasicMenuTransition } from "../Animations/Transitions/Navigation/BasicMenuTransition"

interface BasicMenuDrawerProps {
  isOpen: boolean
}

export const BasicMenuDrawer: React.FC<BasicMenuDrawerProps> = ({ isOpen }) => {
  return (
    <BasicMenuTransition isOpen={isOpen}>
      <GreensockDrawer />
    </BasicMenuTransition>
  )
}

const GreensockDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    var(--color-greensock-green-1),
    var(--color-greensock-green-2),
    var(--color-greensock-green-4)
  );
  border-radius: 20px 0 0 20px;
  width: 280px;
  box-shadow: 0 0 24px -3px rgba(193, 255, 193, 0.6);
  z-index: 999;
`
