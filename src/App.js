import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}

export default App;
