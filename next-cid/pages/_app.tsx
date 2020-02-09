import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { Loaded } from "./CidForm";
import "./index.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: teal[600] }
  }
});

const Unloaded = () => {
  return (
    <header className="App-header">
      <div>Loading wasm...</div>
    </header>
  );
};

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [wasm, setWasm] = useState<any | null>(null);

  const loadWasm = async () => {
    try {
      setLoading(true);
      const wasm = await import("cid-gen");
      setWasm(wasm);
    } finally {
      setLoading(false);
    }
  };

  if (!loading && wasm == null) {
    loadWasm();
  }

  return (
    <ThemeProvider theme={darkTheme}>
      {wasm ? <Loaded wasm={wasm} /> : <Unloaded />}
    </ThemeProvider>
  );
};

export default App;
