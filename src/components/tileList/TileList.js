import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  console.log("tile props", props);
  let tiles = props.data.map((item) => (
    <Tile data={item} key={item.name || item.title} />
  ));

  return <div>{tiles}</div>;
};
