import { ReactNestFetch } from 'ssr-types';

const fetch: ReactNestFetch<{
  service: { index: () => {} };
}> = async ({ ctx, routerProps }) => {
  const data = __isBrowser__
    ? await (await window.fetch('/api/index')).json()
    : await ctx!.service?.index();
  console.log('index');
  return {
    // 建议根据模块给数据加上 namespace防止数据覆盖
    data,
  };
};

export default fetch;
