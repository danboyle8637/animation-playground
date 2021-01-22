import styled from "styled-components"

export const HoverCardCSS = () => {
  return (
    <>
      <BasicCard />
    </>
  )
}

const BasicCard = styled.div`
  background: var(--color-gradient-base);
  border-radius: 20px;
  width: 100%;
  height: 300px;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: translate(0, -8px) scale(1.04);
  }
`
