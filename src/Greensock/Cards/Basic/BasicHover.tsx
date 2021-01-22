import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap, Power3 } from "gsap"

export const BasicHover = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const card = cardRef.current

    if (isHovering) {
      gsap.to(card, {
        y: -8,
        scale: 1.04,
        duration: 0.3,
        ease: Power3.easeInOut,
      })
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: Power3.easeInOut,
      })
    }
  }, [isHovering])

  const toggleHover = () => {
    setIsHovering((prevValue) => !prevValue)
  }

  return (
    <>
      <BasicCard
        ref={cardRef}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
    </>
  )
}

const BasicCard = styled.div`
  background: var(--color-gradient-gsap);
  border-radius: 20px;
  width: 100%;
  height: 300px;
  cursor: pointer;
`
