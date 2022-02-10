import TourCard from "../components/TourCards";
import Container from "@mui/material/Container";
import { Box, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";

import cities from "../data.json";

const preventDefault = (event) => event.preventDefault();

const Home = () => (
  <div className="App">
    <Container sx={{ marginY: 5 }}>
      {cities.map((city) => (
        <>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {city.name} Touren
            {/* <Box onClick={preventDefault}>
              <Link href="#" underline="none">
                {"Top {city.name} Tours"}
              </Link>
            </Box> */}
          </Typography>
          <Grid container spacing={4}>
            {city.tours.map((tour, index) => (
              <TourCard tour={tour} key={index} />
            ))}
          </Grid>
        </>
      ))}
    </Container>
  </div>
);
export default Home;
