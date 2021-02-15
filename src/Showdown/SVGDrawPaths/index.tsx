import styled from "styled-components"

import { ShowdownHeadline } from "../../styles/typography"
import { FormCheckFramer } from "../../svgs/FormCheckFramer"
import { FormCheckGsap } from "../../svgs/FormCheckGsap"

export const SVGDrawPaths = () => {
  return (
    <SectionContainer>
      <ShowdownHeadline>Drawing SVG Paths:</ShowdownHeadline>
      <CheckContainer>
        <FramerValidCheck isTextInput={true} shouldAnimate={true} />
        <GsapValidCheck isTextInput={false} shouldAnimate={true} />
      </CheckContainer>
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
  width: 100%;
  max-width: 800px;
`

const CheckContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const FramerValidCheck = styled(FormCheckFramer)`
  width: 100px;
`

const GsapValidCheck = styled(FormCheckGsap)`
  width: 100px;
`
