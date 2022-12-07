import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/name";

const getDetailsOfCountries = async (countryName: any) => {
  const config = {
    params: {
      fields: "name,capital,languages,population,flags",
    },
  };
  let endpoints = [];
  let results: any = [];
  for (let i = 0; i < countryName.length; i++) {
    endpoints.push(`${API_URL}/${countryName[i].name}`);
  }
  const tasks = endpoints.map((endpoint) => axios.get(endpoint, config));
  const responses = await Promise.allSettled(tasks);

  responses.map((response) => {
    let temporaryId = 20;
    if (response.status === "fulfilled") {
      results.push(response.value);
    } else if (response.status === "rejected") {
      let errorCountry = response.reason.config.url.slice(36);
      const emptyCountry = {
        data: [
          {
            id: temporaryId++,
            name: { common: errorCountry },
            languages: { error: "No information found!" },
            population: 0,
            capital: ["No information found!"],
            flags: { svg: "" },
          },
        ],
      };
      results.push(emptyCountry);
    }
  });

  return results
    .map((item: any) => item!.data[0])
    .map(
      (
        item: {
          name: { common: any };
          languages: { [s: string]: unknown } | ArrayLike<unknown>;
          population: any;
          capital: any[];
          flags: { svg: any };
        },
        index: any
      ) => ({
        id: index,
        name: item.name.common,
        languages: Object.values(item.languages),
        population: item.population,
        capital: item.capital[0],
        flags: item.flags.svg,
      })
    );
};

const countryDetailsService = {
  getDetailsOfCountries,
};

export default countryDetailsService;
