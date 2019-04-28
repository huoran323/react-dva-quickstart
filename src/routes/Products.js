import React from "react";
import { connect } from "dva";
import ProductList from "./../components/ProductList";

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: "products/deleted",
      payload: id
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
// connect 方法返回的也是一个 React 组件，通常称为容器组件
//因为它是原始 UI 组件的容器，即在外面包了一层 State。
// 第一个参数，传入一个products,返回一个经过action处理的新的products,更新了state(下面的写法一样)
export default connect(({ products }) => ({
  products
}))(Products);

// export default connect(({ products }) => {
//   return {
//     products: products
//   };
// })(Products);
