import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SimpleCard from "./Test.jsx";

class Link extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    // this.renderCard = this.renderCard.bind(this);
  }

  state = { getLink: "", urls: [] };

  handleClick(e) {
    e.preventDefault();
    alert("Link added successfully;");
    this.setState({
      urls: this.state.urls.concat(this.state.getLink),
    });
  }

  onChange(e) {
    this.setState({
      getLink: e.target.value,
    });
  }

  onClearArray = () => {
    this.setState({ urls: [] });
  };

  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Adding Links
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="srcName"
              label="Add your link"
              onChange={(e) => this.setState({ getLink: e.target.value })}
              fullWidth
            />
          </Grid>
          <br />
        </Grid>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClick.bind(this)}
        >
          Add Link
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.onClearArray.bind(this)}
        >
          Clear
        </Button>
        {/* <h3>{this.state.getLink}</h3> */}
        <ol>
          {this.state.urls.map((url) => (
            <li key={url}>
              <SimpleCard url={url} />
            </li>
          ))}
        </ol>
      </>
    );
  }
}

export default Link;
