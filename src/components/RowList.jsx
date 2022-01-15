import React from "react";
import categories from "./Categories";
import shops from "./Shops";
import CategoryCard from "./CategoryCard";
import ShopCard from "./ShopCard";

function RowList(props) {

  function renderRowList(type, loc) {
    const { saharanpur, dehradun, roorkee } = shops;
    if (type === "category") {
      return categories.map((catg) => (
        <CategoryCard key={catg.id} name={catg.name} img={catg.img} />
      ));
    } else if (type === "shop") {
      let list = saharanpur;
      if (loc === "Dehradun") list = dehradun;
      else if(loc === "Roorkee") list = roorkee;
      else list = saharanpur;
      return list.map((shop) => {
        return (
          <ShopCard
            key={shop.id}
            name={shop.name}
            img={shop.img}
            location={shop.location.area}
            rating={shop.rating}
            category={shop.category}
          />
        );
      });
    } else {
      return <h1>Error!!</h1>;
    }
  }

  return <div className="flex-container">{renderRowList(props.type, props.loc)}</div>;
}

export default RowList;
