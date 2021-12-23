import { h } from "preact";
import { Route, Router } from "preact-router";
import { CssBaseline } from "@mui/material";
import Home from "../routes/home";

export default function App() {
  return (
    <div id="preact_root">
      <CssBaseline />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}
