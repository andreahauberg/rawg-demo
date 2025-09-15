import { Nav } from "./components/Nav";
import { GameGrid } from "./components/GameGrid";
import "./css/App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { GenreList } from "./components/GenreList";



function App() {


  return (
    <>
      <Grid
        templateAreas={
          {
            base: `"nav" "main"`,
            lg: `"nav nav"
                "aside main"`
          }   
        }
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem pl="2" area={"nav"}>
          <Nav />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" area={"aside"}>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem pl="2" area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App


