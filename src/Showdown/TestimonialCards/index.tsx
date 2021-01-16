import styled from "styled-components"

import { ShowdownHeadline } from "../../styles/typography"
import { ExpandBarCard as FCard } from "../../FramerMotion/Cards/TestimonialCards/ExpandBarCard"
import { ExpandBarCard as GCard } from "../../Greensock/Cards/TestimonialCards/ExpandBarCard"
import { sizes } from "../../styles/Global"

export const TestimonialCards = () => {
  return (
    <SectionContainer>
      <ShowdownHeadline>Testimonial Cards</ShowdownHeadline>
      <CardContainer>
        <FCard
          headline="Framer is the $%*@!"
          location="The Grid"
          name="Framer"
        />
        <GCard
          headline="The Sock #$!@-ing Rules!"
          location="The Grid"
          name="The Sock"
        />
      </CardContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  margin: 0;
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
`

const IntroContainer = styled.div``

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  max-width: 800px;
  ${sizes.aboveMobile} {
    grid-template-columns: 1fr 1fr;
  }
`
