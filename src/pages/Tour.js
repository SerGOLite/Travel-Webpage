import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import CustomizedAccordions from "../components/Accordian";
import ImageCollage from "../components/ImageCollage";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Erkunde die Welt in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://images.unsplash.com/photo-1521197462227-d93940d220b1"
        alt="Bild"
        height={325}
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        Über die Reisetour
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptates
        rem quos delectus debitis earum modi, ipsum veritatis. Perferendis
        officiis nobis, aut hic praesentium nulla vero, possimus omnis
        reprehenderit blanditiis quis incidunt minima voluptatibus illum quam
        corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Exercitationem officiis commodi beatae
        animi incidunt necessitatibus aut provident ad ex. Saepe!
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3}>
        Häufig gestellte Fragen (FAQ)
      </Typography>
      <CustomizedAccordions />
    </Box>
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
