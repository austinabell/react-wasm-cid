import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  card: {
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "column"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

type FormElem = React.FormEvent<HTMLFormElement>;

type ILoaded = {
  wasm: any;
};

export const Loaded = ({ wasm }: ILoaded) => {
  const [text, setText] = useState<string>("");
  const [cid, setCid] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    let cid_bz;
    try {
      cid_bz = wasm.hex_to_cid_hex(text);
      setCid(cid_bz);
      setError(null);
    } catch (err) {
      setError(err.toString());
      console.error("Error in getting cid: ", err);
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={1} className={classes.card}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" color={"primary"}>
            Forest Cid bytes generator
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="bytes"
              label="Hex Bytes"
              autoFocus
              value={text}
              error={error != null}
              helperText={error}
              onChange={e => setText(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Generate Cid bytes
            </Button>
          </form>
          <TextField
            id="standard-read-only-input"
            fullWidth
            label="Blake2b512 Cid"
            value={cid}
            multiline
            InputProps={{
              readOnly: true
            }}
          />
        </div>
      </Paper>
    </Container>
  );
};
