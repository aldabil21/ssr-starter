// 用户自定义 store，用法查看文档 http://doc.ssr-fc.com/docs/features$communication#React%20%E5%9C%BA%E6%99%AF

const state = {
  test: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TEST':
      console.log(state);
      return {
        ...state,
        test: 1,
      };
    default:
      return state;
  }
}

export { state, reducer };
