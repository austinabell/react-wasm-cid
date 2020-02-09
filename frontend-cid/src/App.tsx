import React, { useState } from "react";
import "./App.css";

type FormElem = React.FormEvent<HTMLFormElement>;

type ILoaded = {
  wasm: any;
};

const Loaded = ({ wasm }: ILoaded) => {
  const [text, setText] = useState<string>("");
  const [cid, setCid] = useState<string>("");

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    setCid(text);
  };

  return (
    <header className="App-header">
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
      <div>{cid}</div>
    </header>
  );
};

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
    <div className="App">{wasm ? <Loaded wasm={wasm} /> : <Unloaded />}</div>
  );
};

export default App;
