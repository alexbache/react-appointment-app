import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;

  const options = contacts.map((item) => (
    <option value={item.name} key={item.name}>
      {item.name}
    </option>
  ));
  return (
    <select
      name="contact"
      onChange={(e) => {
        props.handleChange(e.target.value);
      }}
    >
      <option>no contact selected</option>
      {options}
    </select>
  );
};
