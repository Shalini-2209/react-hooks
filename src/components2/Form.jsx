import React from "react";
import useForm from "./useForm";

const Form = () => {
  const [fname, resetFname, bindFname] = useForm("");
  const [lname, resetLname, bindLname] = useForm("");

  const handleSubmit = () => {
    alert(`My name is ${fname} ${lname} `);
    resetFname();
    resetLname();
  };

  return (
    <>
      <center>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label> First Name </label>
              <input {...bindFname} type="text" />
            </div>
            <div>
              <label> Last Name </label>
              <input {...bindLname} type="text" />
            </div>
            <button type="submit">Submit Changes</button>
          </form>
        </div>
      </center>
    </>
  );
};

export default Form;
