import { Props } from "framer-motion/types/types"
import { forwardRef } from "react"
import styled from "styled-components"

export const BasicMenuItem = forwardRef<HTMLLIElement, Props>(
  ({ children }, ref) => {
    return <BasicItemContainer ref={ref}>{children}</BasicItemContainer>
  }
)

const BasicItemContainer = styled.li`
  font-size: 32px;
  font-weight: 800;
  color: #2c2c2c;
`
