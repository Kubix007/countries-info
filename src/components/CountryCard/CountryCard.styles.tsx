import { Card, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import { CardMediaProps } from "./CountryCard.types";

export const CardLayout = styled(Card)`
  &.MuiPaper-root {
    width: 400px;
    height: 400px;
    -webkit-box-shadow: 10px 10px 40px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 40px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 40px -3px rgba(0, 0, 0, 0.75);
  }
`;

export const CardImage = styled(CardMedia)<CardMediaProps>``;

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
    font-size: 20px;
  }
`;
