import { delay } from "dva/saga";

export default {
  namespace: "counter",
  state: {
    count: 1
  },
  reducers: {
    // action中是可以包含参数的
    add(state, action) {
      return {
        count: state.count + 1
      };
    }

    //下面这种方式也可以，这种方式多用于比较复杂的结构，如“login/start”等等
    // "add" (state, action) {
    //   return {
    //     count: state.count + 1
    //   };
    // }
  },
  effects: {
    *asyncAdd({ payload }, { call, put, select }) {
      //select可以取出state中的值，用以做进一步的异步操作请求等
      //   const counter = yield select(state => state.counter);
      // 上下四种写法是一样的
      //   const counter = yield select(({ counter }) => counter);
      //   const counter = yield select(_ => _.counter);
      const { counter } = yield select(_ => _);
      console.log(counter);

      // 演示异步操作
      yield call(delay, 3000);
      yield put({ type: "add" });
    }
  }
};
