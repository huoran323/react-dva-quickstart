import React from "react";
import { connect } from "dva";

const User = props => {
  const { error, user } = props.user;
  const { dispatch } = props;
  // loading监听异步操作effects["user/fetch"]，用来判断请求的状态
  let isFetching = props.loading.effects["user/fetch"];

  let data;

  if (error) {
    data = error;
  } else if (isFetching) {
    data = "Loading...";
  } else {
    data = user && user.data[0].name;
  }

  return (
    <div>
      <h1>{data}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "user/fetch"
          });
        }}
      >
        get user
      </button>
    </div>
  );
};

User.propTypes = {};

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     loading: state.loading
//   };
// };
const mapStateToProps = ({ user, loading }) => {
  return {
    user,
    loading
  };
};

export default connect(mapStateToProps)(User);
