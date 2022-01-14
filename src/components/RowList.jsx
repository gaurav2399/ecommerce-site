import React from "react";
import categories from "./Categories";
import shops from "./Shops";
import CategoryCard from "./CategoryCard";
import ShopCard from "./ShopCard";

function RowList(props) {

  function renderRowList(type) {
    if (type === "category") {
      return categories.map((catg) => (
        <CategoryCard name={catg.name} img={catg.img} />
      ));
    } else if (type === "shop") {
      return shops.map((shop) => {
        return (
          <ShopCard
            name={shop.name}
            img={shop.img}
            location={shop.location.area}
            rating={shop.rating}
            category={shop.category}
          />
        );
      });
    } else {
        return <h1>Error!!</h1>
    }
  }

  return <div className="flex-container">{renderRowList(props.type)}</div>;
}

export default RowList;
