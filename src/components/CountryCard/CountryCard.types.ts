import { ICountry } from "../../shared/types";

export interface Props {
  image?: string;
  country: ICountry;
}

export interface CardMediaProps {
  component: string;
  alt: string;
  height: string;
}
