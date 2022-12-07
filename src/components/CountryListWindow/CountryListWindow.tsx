import BackButton from "../BackButton";
import CountryCardList from "../CountryCardList";
import DetailsButton from "../DetailsButton";
import * as Styles from "./CountryListWindow.style";

const CountryListWindow = () => {
  return (
    <>
      <Styles.Container>
        <BackButton />
        <DetailsButton />
      </Styles.Container>
      <CountryCardList />
    </>
  );
};

export default CountryListWindow;
