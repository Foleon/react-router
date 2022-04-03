import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "@foleon/react-router-dom/server";

import App from "./App";

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
