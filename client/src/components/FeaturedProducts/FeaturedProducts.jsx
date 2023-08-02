import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Chúng tôi luôn muốn đem lại những trải nhiệm mua sắm tốt nhất đến với khách hàng, hy vọng bạn có những phút giây tuyệt vời khi mua sắm tại GUCCI. Hãy tham khảo hai tính năng mới Featured Products và Trendding Products để cập nhập xu hướng thời trang cùng chúng tôi.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;