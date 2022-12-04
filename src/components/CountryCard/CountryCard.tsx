import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Props } from "./CountryCard.types";
import QuestionMarkIcon from "../../img/questionMark.svg";
import * as Styles from "./CountryCard.styles";
const CountryCard = ({ country }: Props) => {
  return (
    <Grid item>
      <Styles.CardLayout sx={{ maxWidth: 280 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="280"
          width="280"
          image={country.flags ? `${country.flags}` : QuestionMarkIcon}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {country.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            <p>{`Capital: ${
              country.capital ? country.capital : "No information found!"
            }`}</p>
            <p>{`Population: ${
              country.population ? country.population : "No information found!"
            }`}</p>
            <p>{`Languages: ${
              country.languages
                ? country.languages.join()
                : "No information found!"
            }`}</p>
          </Typography>
        </CardContent>
      </Styles.CardLayout>
    </Grid>
  );
};

export default CountryCard;
