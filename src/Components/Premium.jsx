import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  const [form, setForm] = useState({
    userName: "",
    address: "",
    city: "",
    state: "",
    code: "",
  });

  var [values, setValues] = useState(null);

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    fetchValues();
  }, []);

  const fetchValues = async () => {
    setSubmit(true);

    const res = await fetch("/notes");
    const data = await res.json();
    setSubmit(false);
    setValues(data);
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const postNotes = async (data) => {
    await fetch("/notes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmit(true);
    await postNotes(form);
    setSubmit(false);
    setForm({ userName: "", address: "", city: "" });

    fetchValues();
  };

  console.log(form);

  return (
    <>
      {submit ? (
        <div className="spinner-border">
          <span className="sr-only">Loading..</span>
        </div>
      ) : (
        ""
      )}
      <div className={classes.root}>
        <div>
          <TextField
            label="Username"
            style={{ margin: 8 }}
            placeholder="Username"
            helperText="Username You used to create Account"
            fullWidth
            onChange={handleInputChange}
            margin="normal"
            name="userName"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Billing Address line 1"
            style={{ margin: 8 }}
            placeholder="Address"
            defaultValue=""
            helperText="Permanent Address"
            name="address"
            fullWidth
            onChange={handleInputChange}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="City"
            placeholder="City"
            onChange={handleInputChange}
            className={classes.textField}
            name="city"
          />
          <TextField
            label="State"
            placeholder="State"
            onChange={handleInputChange}
            name="state"
            className={classes.textField}
          />
          <TextField
            label="Postal Code"
            id="margin-normal"
            name="code"
            placeholder="Postal Code"
            onChange={handleInputChange}
            className={classes.textField}
          />
        </div>
      </div>
      <br />
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
        disableElevation
      >
        Submit
      </Button>

      <div>{JSON.stringify(values, null, 8)}</div>
    </>
  );
}
