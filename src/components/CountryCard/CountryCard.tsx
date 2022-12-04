import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Props } from "./CountryCard.types";
import QuestionMarkIcon from "../../img/questionMark.svg";

const CountryCard = ({ image, name }: Props) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 360 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="280"
          width="280"
          src={QuestionMarkIcon}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            <p>{`Capital:`}</p>
            <p>{`Population:`}</p>
            <p>{`Languages:`}</p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CountryCard;
