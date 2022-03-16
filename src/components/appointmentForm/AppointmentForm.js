import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  console.log(props);

  const handleContactChange = (e) => {
    console.log(e);
    props.setContact(e);
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          {" "}
          Title
          <input
            type="text"
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          ></input>
        </label>
        <label>
          Date
          <input
            type="date"
            min={getTodayString()}
            value={props.date}
            onChange={(e) => props.setDate(e.target.value)}
          ></input>
        </label>
        <label>
          Time
          <input
            value={props.time}
            onChange={(e) => props.setTime(e.target.value)}
          ></input>
          <label>
            Contact
            <ContactPicker
              contacts={props.contacts}
              handleChange={handleContactChange}
            />
          </label>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
