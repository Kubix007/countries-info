import styled from "styled-components";
import { Typography } from "@mui/material";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #faedcd;
`;

export const Header = styled(Typography)`
  &.MuiTypography-root {
    font-family: Montserrat-SemiBold;
    font-size: 3em;
    text-align: center;
    @media screen and (max-width: 450px) {
      font-size: 2em;
    }
  }
`;

export const SubHeader = styled(Typography)`
  &.MuiTypography-root {
    font-family: Montserrat-Regular;
    font-size: 2em;
    text-align: center;
    @media screen and (max-width: 450px) {
      font-size: 1em;
    }
  }
`;
