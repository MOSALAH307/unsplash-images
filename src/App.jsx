import { Fragment } from "react";
import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";

function App() {
  return (
    <Fragment>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </Fragment>
  );
}

export default App;
