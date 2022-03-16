import React from "react";

export const Tile = (props) => {
  console.log(props);

  return (
    <div className="tile-container">
      <p className="tile-title">{props.data.name || props.data.title}</p>
      <p className="tile">{props.data.phone || props.data.date}</p>
      <p className="tile">{props.data.email || props.data.time}</p>
      <p className="tile">{props.data.contact || ""}</p>
    </div>
  );
};
