export interface ICountryState {
  countries: {
    country: string | null;
    population: string | null;
    capital: string | null;
    languages: string | null;
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}
