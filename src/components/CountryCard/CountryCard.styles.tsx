import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const CardLayout = styled(Card)`
  width: 450spx;
  height: 500px;
`;

export const Strong = styled.strong`
  font-family: Montserrat-SemiBold;
`;

export const Paragraph = styled(Typography)`
  &.MuiTypography-root {
    font-family: Montserrat-Regular;
    color: black;
  }
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    font-family: Montserrat-SemiBold;
    color: black;
  }
`;
