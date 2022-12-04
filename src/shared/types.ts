export interface ICountryState {
  countries: {
    countryDetails: ICountry[];
    countryNames: string[];
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isLoaded: boolean;
}

export interface ICountry {
  name: string;
  population: string;
  capital: string[];
  languages: string[];
  flags: {
    png: string;
    svg: string;
  };
}
