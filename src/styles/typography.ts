import styled from 'styled-components'
import { sizes } from '../styles/Global'

export const ShowdownHeadline = styled.h3`
  font-size: 46px;
  font-weight: 600;
  color: #493984;
  background: linear-gradient(to right, #1D1733, #775AE2, #493984, #0E0B19);
	background-clip: inherit;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  text-transform: uppercase;
  ${sizes.aboveMobile} {
    font-size: 56px;
  }
`