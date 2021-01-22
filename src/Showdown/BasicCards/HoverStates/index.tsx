import styled from "styled-components"

import { ShowdownHeadline } from "../../../styles/typography"
import { HoverCardCSS } from "../../../VanillaCSS/Cards/Basic/HoverCardCSS"
import { BasicHover as GBasicHover } from "../../../Greensock/Cards/Basic/BasicHover"
import { BasicHover as FBasicHover } from "../../../FramerMotion/Cards/Basic/BasicHover"

export const HoverStates = () => {
  return (
    <SectionContainer>
      <ShowdownHeadline>Basic Hover States:</ShowdownHeadline>
      <CardContainer>
        <HoverCardCSS />
        <FBasicHover />
        <GBasicHover />
      </CardContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  margin: 0;
  padding: 40px 12px 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  max-width: 800px;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
`
