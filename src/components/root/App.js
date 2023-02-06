import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div style={{backgroundColor:"#dff0e3"}}>
      <Navi />
      <Container>
        <Routes>
          <Route path="/cartDetail" element={<CartDetail />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
