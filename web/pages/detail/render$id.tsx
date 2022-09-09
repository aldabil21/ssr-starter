import React, { useContext } from 'react';
import { IContext, SProps } from 'ssr-types';
import Player from '@/components/player';
import Brief from '@/components/brief';
import Recommend from '@/components/recommend';
import Search from '@/components/search';
import {
  Ddata,
  RecommendDataNode,
  PlayerDataNode,
  BriefDataNode,
} from '~/typings/data';
import { useStoreContext } from 'ssr-common-utils';

export default (props: SProps) => {
  const { state, dispatch } = useContext<IContext<Ddata>>(useStoreContext());
  // console.log(state);
  return (
    <div>
      <Search></Search>
      {state?.data?.data[0].dataNode ? (
        <div>
          <Player data={state.data.data[0].dataNode as PlayerDataNode[]} />
          <Brief data={state.data.data[1].dataNode as BriefDataNode[]} />
          <Recommend
            data={state.data.data[2].dataNode as RecommendDataNode[]}
          />
        </div>
      ) : (
        <img
          src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif"
          className="loading"
        />
      )}
    </div>
  );
};
