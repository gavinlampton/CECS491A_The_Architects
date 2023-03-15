import React, { useState } from "react";
import axios from "axios";
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
  const [phone, setPhone] = useState("+1");
  const [saleNotifications, setSaleNotifications] = useState(1);
  const [stockNotifications, setStockNotifications] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const saleNotificationsValue = saleNotifications ? 1 : 0;
      const stockNotificationsValue = stockNotifications ? 1 : 0;
      await axios.post("http://localhost:3001/customer", {
        first,
        last,
        email,
        phone,
        saleNotifications: saleNotificationsValue,
        stockNotifications: stockNotificationsValue,
      });
      alert("Customer added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add customer");
    }
  };

  return (
    <div className="form-body">
      <h3>Please enter your details</h3>
      <form onSubmit={handleSubmit}>
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
          <MDBCheckbox
            label="Sale Notifications"
            defaultChecked={saleNotifications}
            onChange={() => setSaleNotifications(!saleNotifications)}
          />
          <MDBCheckbox
            label="New stock Notifications"
            defaultChecked={stockNotifications}
            onChange={() => setStockNotifications(!stockNotifications)}
          />
        </MDBRow>

        <MDBBtn type="submit" block>
          Submit
        </MDBBtn>
      </form>
    </div>
  );
};

export default CustomerForm;
