import { render } from "preact";
import App from "/src/app";
import "/src/index.css";

render(<App />, document.getElementById("app") as HTMLElement);
