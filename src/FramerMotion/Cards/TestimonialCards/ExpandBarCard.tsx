import { useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import { NavigationArrow } from "../../../svgs/NavigationArrow"
import { programShadow, gradientLineBg } from "../../../styles/styleFunctions"

interface ExpandBarCardProps {
  headline: string
  name: string
  location: string
}

interface GradientLineStyleProps {
  gradient: string
}

const cardVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
}

const nameVariants = {
  closed: { opacity: 0, x: 40 },
  open: { opacity: 1, x: 0 },
}

const arrowVariants = {
  closed: { rotate: 0 },
  open: { rotate: 90 },
}

export const ExpandBarCard: React.FC<ExpandBarCardProps> = ({
  headline,
  name,
  location,
}) => {
  const [isTestimonialOpen, setIsTestimonialOpen] = useState(false)

  const toggleTestimonialCard = () =>
    setIsTestimonialOpen((prevValue) => !prevValue)

  return (
    <CardContainer type="button" onClick={toggleTestimonialCard}>
      <ClassContainer>
        <ClosedTestimonialContainer>
          <Photo />
          <AnimatePresence>
            {isTestimonialOpen ? (
              <TestimonialName
                variants={nameVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {name}, {location}
              </TestimonialName>
            ) : (
              <TestimonialHeadline
                variants={nameVariants}
                initial="show"
                exit="hide"
              >
                {headline}
              </TestimonialHeadline>
            )}
          </AnimatePresence>
          <ArrowContainer
            variants={arrowVariants}
            initial="closed"
            animate={isTestimonialOpen ? "open" : "closed"}
          >
            <Arrow
              color1="#46D7FF"
              color2="#AEEDFF"
              gradientId="framerExpandableCard"
            />
          </ArrowContainer>
        </ClosedTestimonialContainer>
        <AnimatePresence>
          {isTestimonialOpen ? (
            <BodyCopyContainer
              style={{ overflow: "hidden" }}
              variants={cardVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <GradientLine gradient={gradientLineBg("framer")} />
              <Testimonial>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Testimonial>
            </BodyCopyContainer>
          ) : null}
        </AnimatePresence>
      </ClassContainer>
    </CardContainer>
  )
}

const CardContainer = styled(motion.button)`
  padding: 12px;
  background: #162449;
  border: none;
  border-radius: 40px;
  width: 100%;
  max-width: 390px;
  height: min-content;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  outline: none;
  overflow: hidden;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 3px var(--color-mainBackground), 0 0 0 5px #2d5ed8;
  }
  &:hover {
    box-shadow: 0 0 0 3px var(--color-mainBackground), 0 0 0 5px #2d5ed8;
  }
`

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const ClosedTestimonialContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 2fr min-content;
  gap: 12px;
  align-items: center;
  width: 100%;
`

const BodyCopyContainer = styled(motion.div)`
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
  background: #177bf6;
  border-radius: 50%;
  width: 62px;
  height: 62px;
`

const ArrowContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #204673;
  border-radius: 50%;
  width: 52px;
  height: 52px;
`

const Arrow = styled(NavigationArrow)`
  width: 20px;
`

const TestimonialHeadline = styled(motion.h4)`
  font-size: 18px;
  font-weight: 700;
  color: #46d7ff;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  width: 100%;
`

const TestimonialName = styled(motion.h4)`
  font-size: 14px;
  font-weight: 500;
  color: #46d7ff;
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
