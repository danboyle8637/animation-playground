import styled from "styled-components"

import { TestimonialCards } from "../src/Showdown/TestimonialCards"
import { BasicSideDrawer } from "../src/Showdown/MobileNavDrawers/BasicSideDrawer"

const Home = () => {
  return (
    <SectionContainer>
      <TestimonialCards />
      <BasicSideDrawer />
    </SectionContainer>
  )
}

export default Home

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 120px;
  justify-items: center;
  width: 100%;
`
