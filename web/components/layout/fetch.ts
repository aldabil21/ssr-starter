import { ReactNestFetch } from 'ssr-types';

const fetch: ReactNestFetch = async ({ ctx, routerProps }) => {
  if (!__isBrowser__) {
    // const data = await (ctx as any)!.apiService?.index();
    return { mainData: { INITIALSSSSSS: 'INITIALSSSSSS' + Math.random() } };
  }
};

export default fetch;
