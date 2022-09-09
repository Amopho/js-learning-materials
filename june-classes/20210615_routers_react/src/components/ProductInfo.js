import React from "react";

const ProductInfo = (props) => {
  const selectedItem = props.data.filter((item) => item.id == props.id);
  console.log(selectedItems);
  const moreInfo = selectedItem.map((item) => {
    const { id, productName, icon, inventory, price } = item;
    return <li key="id"></li>;
  });
};
