export interface ICountryState {
  countries: {
    id: string;
    name: string;
    population: string;
    capital: string[];
    languages: string[];
    flags: {
      svg: string;
    };
  }[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isLoaded: boolean;
}

export interface ICountry {
  id: string;
  name: string;
  population: string;
  capital: string[];
  languages: string[];
  flags: {
    svg: string;
  };
}
