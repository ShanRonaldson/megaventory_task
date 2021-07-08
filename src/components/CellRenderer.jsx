import React from "react";
import reactDom from "react-dom";
import { Grid } from "react-virtualized";

const list = [
    ["purchase order 1", "purchase order number"],
    ["purchase order 2", "purchase order number"],
  ];


  function CellRenderer({columnIndex, key, rowIndex, style}){

    return(
      <div className="renderer" key={key} style={style}>
        {list[rowIndex][columnIndex]}
      </div>
    )


  }