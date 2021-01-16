import styled from "styled-components"

import { ExpandBarCard as FCard } from "../../FramerMotion/Cards/TestimonialCards/ExpandBarCard"
import { ExpandBarCard as GCard } from "../../Greensock/Cards/TestimonialCards/ExpandBarCard"

export const TestimonialCards = () => {
  return (
    <SectionContainer>
      <CardContainer>
        <FCard
          headline="This is Framer Motion"
          location="The Grid"
          name="Framer"
        />
        <GCard
          headline="This is Greensock"
          location="The Grid"
          name="The Sock"
        />
      </CardContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  margin: 0;
  padding: 80px;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 800px;
`
