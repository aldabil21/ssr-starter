import { ReactNestFetch } from 'ssr-types';
import { Ddata } from '~/typings/data';

const fetch: ReactNestFetch<
  {
    service: {
      index: (id: string) => Promise<Ddata>;
    };
  },
  { id: string }
> = async ({ ctx, routerProps }) => {
  const data = __isBrowser__
    ? await (
        await window.fetch(`/api/detail/${routerProps!.match.params.id}`)
      ).json()
    : await ctx!.service.index(ctx!.request.params.id);
  return {
    // 建议根据模块给数据加上 namespace防止数据覆盖
    data: data,
  };
};
export default fetch;
