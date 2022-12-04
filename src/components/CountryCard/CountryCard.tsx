import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Props } from "./CountryCard.types";
import QuestionMarkIcon from "../../img/questionMark.svg";
import * as Styles from "./CountryCard.styles";
const CountryCard = ({ country }: Props) => {
  return (
    <Grid item>
      <Styles.CardLayout sx={{ maxWidth: 280, maxHeight: 450 }}>
        <CardMedia
          component="img"
          alt={country.name}
          height="200"
          image={country.flags ? `${country.flags}` : QuestionMarkIcon}
        />
        <CardContent>
          <Styles.Title gutterBottom variant="h5" textAlign="center">
            {country.name}
          </Styles.Title>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            <Styles.Paragraph>
              <Styles.Strong>Capital:</Styles.Strong>
              {` ${
                country.capital ? country.capital : "No information found!"
              }`}
            </Styles.Paragraph>
            <Styles.Paragraph>
              <Styles.Strong>Population:</Styles.Strong>
              {` ${
                country.population
                  ? new Intl.NumberFormat().format(+country.population)
                  : "No information found!"
              }`}
            </Styles.Paragraph>
            <Styles.Paragraph>
              <Styles.Strong>Languages:</Styles.Strong>{" "}
              {` ${
                country.languages
                  ? country.languages.join()
                  : "No information found!"
              }`}
            </Styles.Paragraph>
          </Typography>
        </CardContent>
      </Styles.CardLayout>
    </Grid>
  );
};

export default CountryCard;
