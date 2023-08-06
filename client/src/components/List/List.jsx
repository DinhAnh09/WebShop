import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId, valueSearch }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  // const {...dataF} = data;
    const filterData = data?.filter((product)=>{
      return product.attributes.title.toLowerCase().includes(valueSearch.toLowerCase())
    })
  return (
    <div className="list">
      {loading
        ? "loading"
        : filterData?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;