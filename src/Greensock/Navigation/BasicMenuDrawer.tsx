import { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

import { BasicMenuTransition } from "../Animations/Transitions/Navigation/BasicMenuTransition"
import { BasicMenuItem } from "./MenuItems"
import { testNavigation } from "../../data/navigation"

interface BasicMenuDrawerProps {
  isOpen: boolean
}

export const BasicMenuDrawer: React.FC<BasicMenuDrawerProps> = ({ isOpen }) => {
  const navItemsRef = useRef<HTMLLIElement[]>([])

  useEffect(() => {
    const navItems = navItemsRef.current

    if (isOpen && navItems) {
      gsap.fromTo(
        navItems,
        { x: 60, autoAlpha: 0 },
        {
          delay: 0.2,
          duration: 0.8,
          x: 0,
          autoAlpha: 1,
          stagger: { each: 0.1 },
        }
      )
    }
  }, [isOpen])

  const navItems = testNavigation.map((item, i) => {
    const id = item.id
    const label = item.label

    return (
      <BasicMenuItem
        key={id}
        ref={(el: HTMLLIElement) =>
          navItemsRef.current ? (navItemsRef.current[i] = el) : []
        }
      >
        {label}
      </BasicMenuItem>
    )
  })

  return (
    <BasicMenuTransition isOpen={isOpen}>
      <GreensockDrawer>
        <NavItemList>{navItems}</NavItemList>
      </GreensockDrawer>
    </BasicMenuTransition>
  )
}

const GreensockDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const NavItemList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 30px;
`
