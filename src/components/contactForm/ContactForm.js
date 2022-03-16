import React from "react";

export const ContactForm = (props) => {
  // console.log("contact form props", props);

  return (
    <div>
      <form onSubmit={props.addContact}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={props.phone}
            onChange={(e) => props.setPhone(e.target.value)}
            pattern="[0-9]{11}"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
