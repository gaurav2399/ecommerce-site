import React from "react";

function ListDivider(props) {
  return (
    <div className="list-divider" id={props.divider === "Top Categories" ? "top-categories" : "top-shops"}>
      <hr />
      <div>
        <h3 className="divider-heading">{props.divider}</h3>
        <p className="divider-see-more">See More</p>
      </div>
      <hr />
    </div>
  );
}

export default ListDivider;
