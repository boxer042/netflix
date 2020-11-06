import * as React from 'react';
import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading';

export interface ILoadingProps {}

export default function Loading({ src, ...restProps }: any) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
