import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import RouterView from "./routes/routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <RouterView />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
