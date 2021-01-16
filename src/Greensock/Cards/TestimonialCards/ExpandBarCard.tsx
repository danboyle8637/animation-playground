import { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import { NavigationArrow } from "../../../svgs/NavigationArrow"
import { gradientLineBg } from "../../../styles/styleFunctions"
import { BodyContentAnimation } from "../../Animations/Transitions/TestimonialCards/ExpandBarCard/ExpandBardCardBody"
import {
  fadeInXHorizontal,
  fadeOutXHorizontal,
  setTestimonialElements,
  rotateArrow,
} from "../../Animations/Transitions/TestimonialCards/ExpandBarCard"

interface ExpandBarCardProps {
  headline: string
  name: string
  location: string
}

interface GradientLineStyleProps {
  gradient: string
}

export const ExpandBarCard: React.FC<ExpandBarCardProps> = ({
  headline,
  name,
  location,
}) => {
  const [isTestimonialOpen, setIsTestimonialOpen] = useState(false)
  const [bodyHeight, setBodyHeight] = useState(0)
  const bodyContainerRef = useRef<HTMLDivElement | null>(null)
  const headlineRef = useRef<HTMLHeadingElement | null>(null)
  const nameRef = useRef<HTMLHeadingElement | null>(null)
  const arrowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const bodyContainer = bodyContainerRef.current
    const headline = headlineRef.current
    const name = nameRef.current
    const arrow = arrowRef.current

    if (isTestimonialOpen && bodyContainer) {
      setBodyHeight(bodyContainer.clientHeight)
    }

    if (headline) {
      setTestimonialElements(headline, !isTestimonialOpen)
    }

    if (name) {
      setTestimonialElements(name, isTestimonialOpen)
    }

    if (arrow) {
      rotateArrow(arrow, isTestimonialOpen)
    }
  }, [isTestimonialOpen])

  const toggleTestimonialCard = () => {
    const headline = headlineRef.current
    const name = nameRef.current
    const arrow = arrowRef.current

    if (isTestimonialOpen && name && headline && arrow) {
      fadeInXHorizontal(headline)
      fadeOutXHorizontal(name)
      rotateArrow(arrow, isTestimonialOpen)
    }

    if (!isTestimonialOpen && headline && name && arrow) {
      fadeInXHorizontal(name)
      fadeOutXHorizontal(headline)
      rotateArrow(arrow, isTestimonialOpen)
    }

    setIsTestimonialOpen((prevValue) => !prevValue)
  }

  return (
    <CardContainer type="button" onClick={toggleTestimonialCard}>
      <ClassContainer>
        <ClosedTestimonialContainer>
          <Photo />

          <TestimonialLabelContainer>
            <TestimonialName ref={nameRef}>
              {name}, {location}
            </TestimonialName>

            <TestimonialHeadline ref={headlineRef}>
              {headline}
            </TestimonialHeadline>
          </TestimonialLabelContainer>

          <ArrowContainer ref={arrowRef}>
            <Arrow
              color1="#C1FFC1"
              color2="#47EC47"
              gradientId="greensockExpandableCard"
            />
          </ArrowContainer>
        </ClosedTestimonialContainer>
        <BodyContentAnimation isOpen={isTestimonialOpen} element={bodyHeight}>
          <BodyCopyContainer
            ref={bodyContainerRef}
            style={{ overflow: "hidden" }}
          >
            <GradientLine gradient={gradientLineBg("greensock")} />
            <Testimonial>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Testimonial>
          </BodyCopyContainer>
        </BodyContentAnimation>
      </ClassContainer>
    </CardContainer>
  )
}

const CardContainer = styled.button`
  padding: 12px;
  background: #171717;
  border: none;
  border-radius: 40px;
  width: 100%;
  max-width: 390px;
  height: min-content;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  outline: none;
  overflow: hidden;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 3px var(--color-mainBackground), 0 0 0 5px #6fec70;
  }
  &:hover {
    box-shadow: 0 0 0 3px var(--color-mainBackground), 0 0 0 5px #6fec70;
  }
`

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const ClosedTestimonialContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: min-content 2fr min-content;
  gap: 12px;
  align-items: center;
  width: 100%;
`

const BodyCopyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto, min-content);
  gap: 10px;
  text-align: left;
  width: 100%;
`

const Photo = styled.div`
  margin: 0;
  padding: 0;
  background: #87ff87;
  border-radius: 50%;
  width: 62px;
  height: 62px;
`

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #464646;
  border-radius: 50%;
  width: 52px;
  height: 52px;
`

const Arrow = styled(NavigationArrow)`
  width: 20px;
`

const TestimonialLabelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: start;
  align-items: center;
  width: 100%;
`

const TestimonialHeadline = styled.h4`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  font-size: 18px;
  font-weight: 700;
  color: #d2d5ff;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  width: 100%;
`

const TestimonialName = styled.h4`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  font-size: 14px;
  font-weight: 500;
  color: #d2d5ff;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`

const GradientLine = styled.div<GradientLineStyleProps>`
  margin: 12px 0;
  background: ${(props) => props.gradient};
  width: 100%;
  height: 3px;
`

const Testimonial = styled.p`
  font-size: 15px;
  color: var(--color-lightBlue);
  line-height: 1.6;
`
