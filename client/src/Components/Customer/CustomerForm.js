import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

import "./CustomerForm.css";

const CustomerForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="form-body">
      <h3>Please enter your details Faisal</h3>
      <form>
        <MDBInput
          className="mb-4"
          type="text"
          id="form1Example1"
          label="First Name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="text"
          id="form1Example1"
          label="Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="email"
          id="form1Example1"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          className="mb-6"
          type="text"
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <MDBRow className="mb-6 checkbox">
          <MDBCheckbox label="Sale Notifications" defaultChecked />
          <MDBCheckbox label="New stock Notifications" defaultChecked />
        </MDBRow>

        <MDBBtn type="submit" block>
          Submit
        </MDBBtn>
      </form>
    </div>
  );
};

export default CustomerForm;
