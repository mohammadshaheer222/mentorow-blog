import ThemeContextProvider from "./Context/ThemeContext";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </>
  );
};

export default App;
