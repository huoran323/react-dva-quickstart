import React from "react";
import { connect } from "dva";

const Counter = ({ counter, dispatch }) => {
  return (
    <div>
      <h1>{counter.count}</h1>
      <button
        onClick={() => {
          //通过counter捕获命名空间中的add，避免了重复命名; 可以继续传递参数
          dispatch({ type: "counter/add", name: "rails365" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "counter/asyncAdd" });
        }}
      >
        acync +
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    //state后面的counter就是models中的namespace的值
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
