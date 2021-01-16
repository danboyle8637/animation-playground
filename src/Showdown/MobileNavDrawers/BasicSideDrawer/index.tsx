import { useState } from "react"
import styled from "styled-components"

import { ShowdownHeadline } from "../../../styles/typography"
import { HamburgerMenu3Bar } from "../../../svgs/HamburgerMenu3Bar"
import { HamburgerMenu4Bar } from "../../../svgs/HamburgerMenu4Bar"
import { BasicMenuDrawer as GreensockDrawer } from "../../../Greensock/Navigation/BasicMenuDrawer"
import { BasicMenuDrawer as FramerDrawer } from "../../../FramerMotion/Navigation/BasicMenuDrawner"
import Portal from "../../../Shared/Portal"

type Menu = "greensock" | "framer"

export const BasicSideDrawer = () => {
  const [greensockOpen, setGreensockOpen] = useState<boolean>(false)
  const [framerOpen, setFramerOpen] = useState<boolean>(false)

  const toggleMenu = (type: Menu) => {
    if (type === "greensock") {
      setGreensockOpen((prevValue) => !prevValue)
    }

    if (type === "framer") {
      setFramerOpen((prevValue) => !prevValue)
    }
  }

  return (
    <>
      <SectionContainer>
        <ShowdownHeadline>Mobile Menu Drawers</ShowdownHeadline>
        <HamburgerContainer>
          <MenuButton type="button" onClick={() => toggleMenu("framer")}>
            <FramerMenuIcon />
          </MenuButton>
          <MenuButton type="button" onClick={() => toggleMenu("greensock")}>
            <GreensockMenuIcon gradientId="mobileMenuDrawer" />
          </MenuButton>
        </HamburgerContainer>
      </SectionContainer>
      <Portal>
        <GreensockDrawer isOpen={greensockOpen} />
        <FramerDrawer isOpen={framerOpen} />
      </Portal>
    </>
  )
}

const SectionContainer = styled.section`
  margin: 0;
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  max-width: 800px;
`

const IntroContainer = styled.div``

const HamburgerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
`

const MenuButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`

const FramerMenuIcon = styled(HamburgerMenu4Bar)`
  width: 54px;
`

const GreensockMenuIcon = styled(HamburgerMenu3Bar)`
  width: 54px;
`
