import { Box } from "@mui/system";
import Nav from "./components/Nav";
import ProductDescription from "./components/ProductDescription";
import ProductImages from "./components/ProductImages";

function App() {
  return (
    <div>
      <Nav />
      <Box
        component={"div"}
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          padding: "0 5rem",
        }}
      >
        <ProductImages />
        <ProductDescription />
      </Box>
    </div>
  );
}

export default App;
