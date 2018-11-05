import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { injectGlobal } from "styled-components";

// import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

injectGlobal`
    * {
        
    }
`;
ReactDOM.render(<App />, document.getElementById("root"));
