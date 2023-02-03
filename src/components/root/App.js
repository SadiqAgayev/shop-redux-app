import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Navi />
      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
