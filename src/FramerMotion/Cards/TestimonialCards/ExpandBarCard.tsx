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

const cardVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
}

const nameVariants = {
  hide: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
}

const arrowVariants = {
  closed: { rotate: 0 },
  open: { rotate: "90deg" },
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
    <CardContainer onClick={toggleTestimonialCard} role="button">
      <ClassContainer>
        <ClosedTestimonialContainer>
          <Photo />
          <AnimatePresence>
            {isTestimonialOpen ? (
              <TestimonialName
                variants={nameVariants}
                initial="hide"
                animate="show"
                exit="hide"
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
            animate={isTestimonialOpen ? "open" : "closed"}
          >
            <Arrow />
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
              <GradientLine gradient={gradientLineBg("strong")} />
              <BlockContent
                blocks={bodyCopy}
                serializer={
                  isNutrition ? NutritionSerializer : FitnessSerializer
                }
              />
            </BodyCopyContainer>
          ) : null}
        </AnimatePresence>
      </ClassContainer>
    </CardContainer>
  )
}

const CardContainer = styled(motion.button)`
  padding: 12px;
  background: #101010;
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
  /* &:focus {
    box-shadow: ${(props) => props.programBoxShadow};
  }
  &:hover {
    box-shadow: ${(props) => props.programBoxShadow};
  } */
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
  background: #4d4b65;
  border-radius: 50%;
  width: 62px;
  height: 62px;
`

const ArrowContainer = styled(motion.div)`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.navigationArrowBackground};
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
  color: #d2d5ff;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  width: 100%;
`

const TestimonialName = styled(motion.h4)`
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
