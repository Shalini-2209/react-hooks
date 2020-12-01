import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import LayoutTextFields from "./Premium.jsx";

class Profile extends Component {
  state = { choice: "" };

  selectedChoice(choice) {
    if (choice == 10) {
      return <LayoutTextFields />;
    }
    return null;
  }

  render() {
    return (
      <>
        {" "}
        <Select
          native
          onChange={(e) => this.setState({ choice: e.target.value })}
        >
          <option aria-label="None" />
          <option value={10}>Premium</option>
          <option value={20}>Free</option>
        </Select>
        {this.selectedChoice(this.state.choice)}
      </>
    );
  }
}

export default Profile;
